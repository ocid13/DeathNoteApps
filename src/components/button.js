import index from "../styles/button.module.css";

const Button = ({ label, eventHandler }) => {
  return (
    <button className={index.button} type='button' onClick={eventHandler} data-action={label}>
      {label}
    </button>
  );
};

export default Button;
