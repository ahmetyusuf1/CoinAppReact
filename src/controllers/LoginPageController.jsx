import { useFormik } from "formik";
import { schema } from "../schema";
import LoginPageView from "../views/LoginPageView";

const LoginPageController = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    validationSchema: schema,
  });
  return <LoginPageView formik={formik} />;
};

export default LoginPageController;
