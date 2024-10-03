import * as Yup from "yup";

export const loginSchame = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Is Required"),
  password: Yup.string().min(5).required("Password Is Required"),
});
