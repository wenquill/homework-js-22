import { Formik, Form } from "formik";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FORM_VALIDTION_SCHEMA } from "../../../utils/validationSchemas";
import styles from "../SignUpForm.module.css";
import Input from "../Input";

function SignUpForm() {
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
      <h1>CREATE AN ACCOUNT</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FORM_VALIDTION_SCHEMA}
      >
        <Form className={styles.form}>
          <Input
            name="name"
            label="Name:"
            type="text"
            placeholder="your name"
            classes={classes}
          />

          <Input
            name="surname"
            label="Surname:"
            type="text"
            placeholder="your surname"
            classes={classes}
          />

          <Input
            name="phoneNumber"
            label="Phone number:"
            type="text"
            placeholder="your phone"
            classes={classes}
          />

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
        Already have an account?{" "}
        <Link className={styles.loginBtn} to="/login">
          Log in
        </Link>
      </div>
    </main>
  );
}

export default SignUpForm;
