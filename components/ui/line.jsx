import classes from "./line.module.css";
export default function Line({ Title }) {
  return (
    <div className={classes.outer}>
      <div className={classes.inner}>{Title}</div>
    </div>
  );
}
