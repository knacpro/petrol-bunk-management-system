import prisma from "../../database/db.config";
import { hashSync } from "bcrypt";
import moment from "moment";

export const fetchTeachers = async (req: any, res: any) => {
    try {
        const teachers = await prisma.teacher.findMany({});
        const filteredTeachers = teachers.filter(
            (teacher: any) => teacher.isActive !== false
        );
        return res.json({ status: 200, data: filteredTeachers });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error fetching teachers",
            error
        });
    }
};

export const createTeacher = async (req: any, res: any) => {
    const {
        name,
        email,
        password,
        mobileNumber,
        aadharNumber,
        dob,
        role = "Teacher"
    } = req.body;

    const findTeacher = await prisma.teacher.findUnique({ where: { email } });
    const findMasterUser = await prisma.masterUser.findUnique({
        where: { email }
    });

    if (findTeacher || findMasterUser) {
        return res.json({ status: 400, message: "Email already registered" });
    }

    try {
        let masterRole = await prisma.masterRole.findFirst({
            where: { role }
        });
        if (!masterRole) {
            masterRole = await prisma.masterRole.create({
                data: { role }
            });
        }

        const newTeacher = await prisma.teacher.create({
            data: {
                name,
                email,
                password: hashSync(password, 10),
                mobileNumber,
                aadharNumber,
                dob: dob ? moment(dob).toDate() : null,
                masterUser: {
                    create: {
                        name,
                        email,
                        password: hashSync(password, 10),
                        roleId: masterRole.id
                    }
                }
            },
            include: { masterUser: true }
        });

        return res.json({
            status: 200,
            message: "Teacher created successfully",
            data: newTeacher
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error creating teacher",
            error
        });
    }
};

export const updateTeacher = async (req: any, res: any) => {
    const { id } = req.params;
    const { name, email, password, mobileNumber, aadharNumber, dob } = req.body;

    try {
        const existingTeacher = await prisma.teacher.findUnique({
            where: { id },
            include: { masterUser: true }
        });

        if (!existingTeacher) {
            return res.json({ status: 404, message: "Teacher not found" });
        }

        if (email && email !== existingTeacher.email) {
            const emailInUse = await prisma.teacher.findUnique({
                where: { email }
            });
            if (emailInUse) {
                return res.json({
                    status: 400,
                    message: "Email already registered"
                });
            }
        }

        const updatedTeacher = await prisma.teacher.update({
            where: { id },
            data: {
                name,
                email,
                password: password
                    ? hashSync(password, 10)
                    : existingTeacher.password,
                mobileNumber,
                aadharNumber,
                dob: dob ? moment(dob).toDate() : null,
                masterUser: {
                    update: {
                        name,
                        email,
                        password: password
                            ? hashSync(password, 10)
                            : existingTeacher.masterUser.password
                    }
                }
            },
            include: {
                masterUser: true
            }
        });

        return res.json({
            status: 200,
            message: "Teacher updated successfully",
            data: updatedTeacher
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error updating teacher",
            error
        });
    }
};

export const deleteTeacher = async (req: any, res: any) => {
    const { id } = req.params;
    const { isActive } = req.body;

    try {
        const existingTeacher = await prisma.teacher.findUnique({
            where: { id }
        });

        if (!existingTeacher) {
            return res.json({ status: 404, message: "Teacher not found" });
        }

        const updatedTeacher = await prisma.teacher.update({
            where: { id },
            data: {
                isActive
            }
        });

        return res.json({
            status: 200,
            message: "Teacher deleted successfully",
            data: updatedTeacher
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error deleting teacher",
            error
        });
    }
};
