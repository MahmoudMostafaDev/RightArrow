import classes from "./button.module.css";

export default function Button({ main, children, onClick, className }) {
  return (
    <button
      className={`${classes.button} ${
        main ? classes.main : classes.secondary
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
