import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="bg-gray-100 rounded-md px-3 py-1 w-max">{name}</button>
    </div>
  );
};

export default Button;
