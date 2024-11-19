import prisma from "../../database/db.config";
import {compareSync} from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import "dotenv/config";

export const loginUser = async (req: any, res: any) => {
    const { username, password } = req.body;
    let jwtSecret = process.env.JWT_SECRET!;
    let token;
    const findUser = await prisma.admin.findFirst({ 
        where: {
            username,
            isActive: true
        }
     });
    if(!findUser) {
        return res.json({ status: 404, message: "User not found" });
    }
    try {
        if (password !== findUser.password) {
            return res.json({ status: 401, message: "Invalid password" });
        }
        token = jwt.sign(
            {
                userId: findUser.id
            },
            jwtSecret
        );
        return res.json({
            status: 200,
            message: "Logged in successfully",
            data: {
                user: findUser,
                token: token
            }
        });
    } catch (error) {
        console.error(error);
        return res.json({
            status: 500,
            message: "Error in login",
            error
        });
    }
};
