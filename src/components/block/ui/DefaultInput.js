import React from "react";
import PropTypes from "prop-types";

function DefaultInput({ title, type, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="">{title}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

DefaultInput.prototype = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
DefaultInput.defaultProps = {
  type: "text"
};
export default DefaultInput;
