import React from "react";
import { Field } from "formik";
import classNames from "classnames";

function Input({ name, label, classes, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors }, meta }) => {
        const inputClasses = classNames(classes.input, {
          [classes.valid]: meta.touched && !meta.error,
          [classes.invalid]: meta.touched && meta.error,
        });

        return (
          <label className={classes.label}>
            <span className={classes.labelSpan}>{label}</span>
            <div className={classes.inputWrapper}>
              <input className={inputClasses} {...restProps} {...field} />
              {meta.touched && meta.error && (
                <span className={classes.error}>{meta.error}</span>
              )}
            </div>
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
