import React from "react";
import img from "./assets/img1.jpg";
import "./RegistrationStyle.css";
import { useFormik } from "formik";
import { signUpScheme } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const {values,errors,handleBlur,touched,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:signUpScheme,
    onSubmit: (values,action) => {
      console.log(values)
      action.resetForm();
    },
  });

  

  return (
    <main className="reg-container">
      <div className="regForm">
        <div className="form">
          <h1>Welcome!</h1>
          <p>To the gk technical website for programmers</p>
          <form onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="name" className="input-label">
                NAME
              </label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ?<p className="form-error">{errors.name}</p>:null}
            </div>
            <div className="input-block">
              <label htmlFor="email" className="input-label">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ?<p className="form-error">{errors.email}</p>:null}
            </div>
            <div className="input-block">
              <label htmlFor="password" className="input-label">
                PASSWORD
              </label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ?<p className="form-error">{errors.password}</p>:null}
            </div>
            <div className="input-block">
              <label htmlFor="confirm_password" className="input-label">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ?<p className="form-error">{errors.confirm_password}</p>:null}
            </div>
            <button className="registration" type="submit">
              REGISTER
            </button>
          </form>
          <p className="signin">
            <strong>Already have an account?</strong>Sign In now
          </p>
        </div>
        <div className="img">
          <img src={img} alt="formImage" />
        </div>
      </div>
    </main>
  );
};

export default Registration;
