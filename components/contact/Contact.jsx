import Image from "next/image";
import Line from "../ui/line";
import Grid from "./Grid";
import img from "./imgs/phones.png";

export default function Contact({ className }) {
  return (
    <div className={className}>
      <Line Title="Contact Us" />
      <div className="flex gap-20 justify-between items-center mb-10">
        <Grid />
        <div className="rounded-[70px] overflow-hidden h-fit md:block hidden">
          <Image src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}
