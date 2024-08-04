//ContactForm

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactsForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: Date.now().toString(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={styles.field}>
          <label htmlFor="number">Number</label>
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
