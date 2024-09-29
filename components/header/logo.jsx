import Image from "next/image";
import logo from "./logo.png";
import classes from "./logo.module.css";
export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src={logo} width={90} alt="logo" className="vsm:block hidden" />
      <h2 className={`${classes.logo} sm:block hidden`}>RightArrow</h2>
    </div>
  );
}
