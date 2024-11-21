import prisma from "../../database/db.config";
import moment from "moment";

export async function updateEmployeesSalaries() {
    let monthDays = [
        { monthNumber: 1, days: 31 },
        { monthNumber: 2, days: 28 },
        { monthNumber: 3, days: 31 },
        { monthNumber: 4, days: 30 },
        { monthNumber: 5, days: 31 },
        { monthNumber: 6, days: 30 },
        { monthNumber: 7, days: 31 },
        { monthNumber: 8, days: 31 },
        { monthNumber: 9, days: 30 },
        { monthNumber: 10, days: 31 },
        { monthNumber: 11, days: 30 },
        { monthNumber: 12, days: 31 }
    ];

    const currentMonth = moment().month() + 1;
    if (currentMonth === 2 && moment().isLeapYear()) {
        const february = monthDays.find(m => m.monthNumber === 2);
        if (february) february.days = 29;
    }

    const currentMonthDays =
        monthDays.find(m => m.monthNumber === currentMonth)?.days || 0;
    if (currentMonthDays === 0) {
        console.error("Invalid month data. Cannot proceed.");
        return;
    }

    const employees = await prisma.employee.findMany();

    for (const employee of employees) {
        const presentDays = parseInt(employee.presentDays, 10);
        const salary = parseInt(employee.salary, 10);

        if (isNaN(presentDays) || isNaN(salary)) {
            console.warn(
                `Skipping employee ${employee.id} due to invalid data.`
            );
            continue;
        }

        const salaryPerDay = salary / currentMonthDays;
        const absentDays = currentMonthDays - presentDays;
        const updatedSalary = Math.max(0, salary - salaryPerDay * absentDays);

        await prisma.salaryManagement.upsert({
            where: { employeeId: employee.id },
            update: {
                updatedSalary: updatedSalary.toString(),
                isActive: true
            },
            create: {
                employeeId: employee.id,
                name: employee.name,
                updatedSalary: updatedSalary.toString(),
                isActive: true
            }
        });
    }

    console.log("Employee salaries updated successfully.");
}
