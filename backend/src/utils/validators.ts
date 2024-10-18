import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
    return async (req, res, next) => {
        for(let validation of validations){
            await validation.run(req);
        }
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        return res.status(422).json({Errors: errors.array()});
    }
}

export const signupValidator = [
    body("email").trim().isEmail().withMessage("Email not valid"),
    body("password").trim().isLength({min: 8}).withMessage("Password needs at least 8 characters")
]

export const loginValidator = [
    ...signupValidator
]