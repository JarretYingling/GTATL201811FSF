import React from "react";

const Math = props => {

  const {
    num1,
    num2,
    operator
  } = props;
  let value;

  switch (operator) {
    case "+":
      value = num1 + num2;
      break;
    case "-":
      value = num1 - num2;
      break;
    case "*":
      value = num1 * num2;
      break;
    case "/":
      value = num1 / num2;
      break;
    default:
      value = undefined;
      break;
  }

  return (
    <span>{value}</span>
  );
}

export default Math;