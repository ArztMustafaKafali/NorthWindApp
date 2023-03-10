import React from "react";

const SelectInput = ({
  name,
  value,
  defaultOption,
  onChange,
  label,
  options,
}) => {
  return (
    <div >
      <label htmlFor={name}> {label} </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value=""> {defaultOption} </option>
        {options.map((option) => {
          return <option value={option.value} key={option.id}> {option.text} </option>;
        })}
      </select>
      {/* {error && <div className="alert alert-danger"> {error} </div>} */}
    </div>
  );
};

export default SelectInput;
