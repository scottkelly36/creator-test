import "./Buttons.scss";

const Button = ({ text, action }) => {
  return (
    <a className="btn btn-primary" href={action}>
      {text}
    </a>
  );
};

export default Button;
