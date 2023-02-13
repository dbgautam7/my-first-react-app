import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(9,50, 'Password must be more than 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=\[\]{};':"\\|,.<>\/?])(?=.*[a-z]).*$/,
      'Password must contain at least 1 capital letter and 1 special character'
    )     
    .required('Password is required'),
});

const Register = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      validateOnChange
      validateOnBlur
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={errors.email && touched.email ? 'error' : ''}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={errors.password && touched.password ? 'error' : ''}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
