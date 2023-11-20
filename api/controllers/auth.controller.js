import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req, res) => {
    const { username, name, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = new User({ username, name, email, password: hashedPassword });
    try{
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};