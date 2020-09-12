import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './forgotPassword.css';
import { useHistory } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const history = useHistory();
  const Home = () => {
    history.push("/");
  };
  
    return (
        <Formik
          initialValues={{ email: ''}}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            axios
            .post("http://localhost:8005/auth/forgotPassword", {
              email: values.email,
            })
            .then(function (response) {
              console.log(response);
              //history.push("/");
            })
            .catch(function (error) {
              console.log(error);
            });
          }}
        >
      
          <Form className="main-form">
            <h1 style={{ color: "#3f51b5" , cursor: "pointer" }} onClick={ Home }> Flipkart </h1>
            <h2> Forgot Password </h2> 
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" className="fields"/>
            <ErrorMessage name="email" />
            <button type="submit" className="register-btn">Forgot</button>
          </Form>
        </Formik>
      );
   
}

export default ForgotPassword;