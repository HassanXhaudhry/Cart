import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Signup.css";
import { Form, Formik } from "formik";
import TextField from "./TextField";
import * as Yup from 'yup';
import { RxCross2 } from "react-icons/rx";

const Signup = () => {

  const [showModel, setShowModel]=useState();

  const LoginModel=()=>{
    useEffect(()=>{
      document.body.style.overflowY="hidden";
      return()=>{
        document.body.style.overflowY="scroll";
      };
    },[]);
    const validate =Yup.object({
      email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      password: Yup.string()
      .required('Password is Required'),
    })
    return(
      <Fragment>
      <Formik
        initialValues={{
          email:'',
          password:''
        }}
        validationSchema={validate}
        onSubmit={values=>{
          console.log(values)
        }}
        >
        {formik => (
          <Fragment>
          <div className="modal-background" >
         <span className="cross-icon"><RxCross2  size={35} onClick={() => setShowModel(false)}/></span> 
          </div>
          <div className="login-div">&nbsp;
            <h2 style={{textAlign:"center"}}>Welcome back</h2>
            <Form>
            <TextField label="Email" name="email" type="email"/>
            <TextField label="Password" name="password" type="password"/><br />
            <a href="" style={{textDecoration:"underline", color:"blue", marginLeft:"40px"}}>Forgot password?</a>
            <button className="form-button-login" type="submit" style={{backgroundColor:"blue"}}>Login</button>
            </Form>
          </div>
          </Fragment>
          )}
        </Formik>
      </Fragment>
    );
  };
  
  const validate =Yup.object({
    firstName: Yup.string()
    .max(15, 'First Name must not less than 15 characters')
    .required('Required'),
    lastName: Yup.string()
    .max(20, ' Last Name must not less than 20 characters')
    .required('Required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
    password: Yup.string()
    .max(8, 'Password must be atleat 8 characters')
    .required('Password is Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password did not match')
    .required('Password is required'),
  })
  return (
    <Fragment>
      <Navbar />
      <div className="signup">
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Formik
        initialValues={{
          firstName:'',
          lastName:'',
          email:'',
          password:'',
          confirmPassword:''
        }}
        validationSchema={validate}
        onSubmit={values=>{
          console.log(values)
        }}
        >
        {formik => (
          <div className="signup-form">&nbsp;
            <h2 style={{textAlign:"center"}}>Welcome to Tasker</h2>
         
            <Form>
            <TextField label="First Name" name="firstName" type="text"/>
            <TextField label="Last Name" name="lastName" type="text"/>
            <TextField label="Email" name="email" type="email"/>
            <TextField label="Password" name="password" type="password"/>
            <TextField label="Confirm Password" name="confirmPassword" type="password"/>
            <button className="form-button" type="submit" style={{backgroundColor:"blue"}}>Sign up</button>
            <button className="form-button" type="reset" style={{backgroundColor:"red"}}>Reset</button>
            <br /><br />
            <h5 style={{textAlign:"center"}}>Already have an account? 
            <a onClick={() => {setShowModel(true);}} style={{textDecoration:"underline",color:"blue", cursor:"pointer"}}>Login</a></h5>
            {showModel && <LoginModel/>}
            </Form>
          </div>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default Signup;
