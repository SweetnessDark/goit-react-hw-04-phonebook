import { ErrorMessage, Field, Form, Formik } from 'formik';
import { customAlphabet } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import React from 'react';
import sass from './ContactForm.module.scss';

const nanoid = customAlphabet('1234567890', 3);

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    onSubmit(newContact);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <div className={sass.wrapper}>
            <label className={sass.label} htmlFor="name">
              Name:
            </label>
            <Field
              className={sass.inputForm}
              name="name"
              type="text"
              id="name"
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div className={sass.wrapper}>
            <label className={sass.label} htmlFor="number">
              Number:
            </label>
            <Field
              className={sass.inputForm}
              name="number"
              type="tel"
              id="number"
            />
            <ErrorMessage name="number" component="div" />
          </div>

          <button className={sass.addBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
