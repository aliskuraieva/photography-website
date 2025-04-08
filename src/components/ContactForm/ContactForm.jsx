import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactFormValidationSchema } from "../../validations/validationSchema";

export const ContactForm = (values) => {
  console.log(values);

return (
  <Formik
    initialValues={{ name: "", email: "", message: "" }}
    validationSchema={contactFormValidationSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <label htmlFor="name">Your Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Your Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="div" />
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </Form>
    )}
  </Formik>
);
};

