import React from "react";
import { Field, ErrorMessage } from "formik";

const AuthenInput = ({ type = "text", name, placeholder, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {placeholder}
      </label>
      <Field
        type={type}
        name={name}
        placeholder={""}
        className={
          "my-1 block w-full px-3 py-1  border-b border-b-gray-300 text-md outline-none" +
          (error && " border-red-500")
        }
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-end text-red-500 italic text-xs"
      />
    </div>
  );
};

export default AuthenInput;
