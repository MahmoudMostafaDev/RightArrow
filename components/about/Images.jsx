import Image from "next/image";
import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";

export default function Images({ className }) {
  return (
    <div className={`relative min-w-fit mx-5 max-h-[300px] ${className}`}>
      <Image src={img2} alt="img" width={200} />
      <Image
        src={img1}
        alt="img"
        width={200}
        className="absolute -bottom-36 -right-28 -z-10"
      />
    </div>
  );
}
