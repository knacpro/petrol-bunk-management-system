import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyToken = (req: any, res: any) => {
    const jwtSecret = process.env.JWT_SECRET!;
    const token = req.headers["authorization"]?.split(" ")[1];
    console.log('token: ', token);
    // if (!token) {
    //     return res.status(403).json({ message: "No token provided" });
    // }
    // try {
    //     const decoded = jwt.verify(token, jwtSecret);
    //     req.user = decoded;
    //     return res.json({
    //         status: 200,
    //         message: "Logged in successfully",
    //         data: {
    //             user: findUser,
    //             token: token
    //         }
    //     });
    // } catch (error) {
    //     return res.status(401).json({ message: "Unauthorized: Invalid token" });
    // }
};
