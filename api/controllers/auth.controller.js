import User from "../models/user.model.js";

export const signup = async(req, res) => {
    const { username, name, email, password } = req.body;
    const user = new User({ username, name, email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
};