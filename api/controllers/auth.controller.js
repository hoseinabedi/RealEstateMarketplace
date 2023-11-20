import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async(req, res, next) => {
    const { username, name, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = new User({ username, name, email, password: hashedPassword });
    try{
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    }catch(err){
        next(err);
    }
};