import jwt from "jsonwebtoken";


export const createToken = (id: String, email: String, expiresIn: String) => {
    const payload = { id, email };
    console.log("inside createToken in token-manager.js");
    console.log("secret", process.env.SECRET_KEY);
    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn});

    return token;
}