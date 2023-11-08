import * as yup from "yup";
export const FORM_VALIDTION_SCHEMA = yup.object({
  name: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
  surname: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
  phoneNumber: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/)
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_-]{6,}$/
    )
    .required()
});
