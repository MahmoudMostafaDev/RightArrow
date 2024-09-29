import logo from "./logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex items-center gap-6">
      <Image src={logo} width={90} alt="logo" className="" />
      <h2 className="logo text-3xl ">RightArrow</h2>
    </div>
  );
}
