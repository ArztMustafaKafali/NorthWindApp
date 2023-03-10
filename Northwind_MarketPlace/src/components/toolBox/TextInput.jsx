import React from "react";

const TextInput = ({ name, value, onChange, error, label }) => {
  return (
    <div>
      <label htmlFor={name}> {label} </label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type="text"
        className="form-control"
      ></input>
      {/* {error && <div className="alert alert-danger"> {error} </div>} */}
    </div>
  );
};

export default TextInput;
