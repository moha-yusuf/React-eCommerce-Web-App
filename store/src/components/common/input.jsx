import React from "react";

const Input = ({ name, label, className, error, ...rest }) => {
  const inputClassNames = `form-group mb-2 ${className}`;
  return (
    <div className={inputClassNames}>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control p-2 mt-1" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
