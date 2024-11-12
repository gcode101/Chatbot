import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    console.log("inside createToken in token-manager.js");
    console.log("secret", process.env.SECRET_KEY);
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn });
    return token;
};
//# sourceMappingURL=token-manager.js.map