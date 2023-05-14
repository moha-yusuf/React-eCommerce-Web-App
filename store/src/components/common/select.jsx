import React from "react";

const Select = ({ name, label, className, options, error, ...rest }) => {
  const selectClassNames = `form-control ${className}`;
  return (
    <div className="form-group">
      { label && <label htmlFor={name}>{label}</label>}
      <select name={name} id={name} {...rest} className={selectClassNames}>
        <option value=""/>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
