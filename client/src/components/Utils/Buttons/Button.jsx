import "./Buttons.scss";
import { Navigate } from "react-router-dom";

const Button = ({ text, action }) => {
  return (
    <button className="btn btn-primary" action={action}>
      {text}
    </button>
  );
};

export default Button;
