import {ErrorMessage, useField } from "formik";
import "./Signup.css";

const TextField = ({label, ...props}) => {
    const [field, meta]=useField(props);
  return (
    <div className="signup-details">
    <label htmlFor={field.name}>{label}</label>
    <input className="signup-input" {...field} {...props} autoComplete="off"/>
    <ErrorMessage component="div" name={field.name} className="signup-error"/>
    </div>
  )
}

export default TextField