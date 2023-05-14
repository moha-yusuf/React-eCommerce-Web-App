import React from "react";

const TextArea = ({ name, label, className, error, ...rest }) => {
  const textareaClassNames = `form-group mb-2 ${className}`;
  return (
    <div className={textareaClassNames}>
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} id={name} className="form-control p-2 mt-1" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
