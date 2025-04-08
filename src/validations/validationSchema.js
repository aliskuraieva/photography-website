import * as Yup from "yup";

export const contactFormValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});
