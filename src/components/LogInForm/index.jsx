import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../SignUpForm/SignUpForm.module.css";
import { FORM_VALIDTION_SCHEMA } from "../../utils/validationSchemas";
import Input from "../Input";

function LogInForm() {
  const initialValues = {
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    password: "",
  };

  function handleSubmit(values, formikBag) {
    console.log(values);
    formikBag.resetForm();
  }

  const classes = {
    error: styles.error,
    label: styles.label,
    labelSpan: styles.labelSpan,
    input: styles.input,
    inputWrapper: styles.inputWrapper,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <main className={styles.main}>
      <h1>LOG IN</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FORM_VALIDTION_SCHEMA}
      >
        <Form className={styles.form}>
          <Input
            name="email"
            label="Email:"
            type="email"
            placeholder="your email"
            classes={classes}
          />

          <Input
            name="password"
            label="Password:"
            type="password"
            placeholder="your password"
            classes={classes}
          />

          <button className={styles.submitBtn} type="submit">
            Create an account
          </button>
        </Form>
      </Formik>
      <div className={styles.loginBtn}>
        Don`t have an account?{" "}
        <Link className={styles.loginBtn} to="/signup">
          Sign up
        </Link>
      </div>
    </main>
  );
}

export default LogInForm;
