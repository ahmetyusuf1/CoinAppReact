import InputFieldView from "./InputFieldView";
import { inputs } from "../constants";

const LoginPageView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 align-items-center justify-content-center">
          Login
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-5"
        >
          {inputs.map((data, index) => (
            <InputFieldView key={index} formik={formik} data={data} />
          ))}
          <button className="btn btn-outline-light">Send</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPageView;
