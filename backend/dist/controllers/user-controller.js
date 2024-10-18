import User from "../models/User.js";
import { hash } from 'bcrypt';
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ Users: users });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(200).json({ User: user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map