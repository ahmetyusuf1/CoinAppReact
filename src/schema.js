import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is a required field"),
  age: yup
    .number()
    .min(18, "Age must be greater than or equal to 18")
    .max(100, "Age must be less than or equal to 100")
    .integer("Age must be an integer")
    .required("Age is a required field"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is a required field"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Your confirmation password is not correct")
    .required("Password Confirm is a required field"),
});
