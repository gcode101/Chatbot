import User from "../models/User.js";
import { hash, compare } from 'bcrypt';

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find();
        return res.status(200).json({Users: users});
    } catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const signup = async (req, res, next) => {
    try{
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            res.status(401).send("User already registered with this email");
        }
        const hashedPassword = await hash(password, 10);
        const user = new User({name, email, password: hashedPassword});
        await user.save();
        return res.status(201).json({User: user});
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).send("User not found");
        }
        const isPasswordCorrect = await compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(403).send("Incorrect password");
        }
        return res.status(200).json({User: user});
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}