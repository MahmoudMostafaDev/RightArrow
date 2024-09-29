import Image from "next/image";
import img from "./imgs/logo-card.png";
export default function ProductCard({ product, category }) {
  return (
    <div className="shadow-md px-4  flex justify-between items-center p-5 rounded-xl bg-white ">
      <Image src={img} alt="logo" width={75} className="hidden sm:block" />
      <p className="text-center text-black text-xl mt-2">{product}</p>
      <p className="text-center text-gray-500 text-lg mt-2">{category}</p>
    </div>
  );
}
