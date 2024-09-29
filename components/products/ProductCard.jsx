import Image from "next/image";
import img from "./imgs/logo-card.png";
export default function ProductCard({ product, category }) {
  return (
    <div className="shadow-md px-4  flex justify-between items-center p-5 rounded-xl   bg-white ">
      <Image src={img} alt="logo" width={75} className="" />
      <p className=" text-end min-[435px]:text-center pe-5 min-[435px]:pe-0  text-black text-lg sm:text-xl mt-2 flex-1 ">
        {product}
      </p>
      <p className="  min-[435px]:block text-center text-gray-500 text-md sm:text-lg mt-2 hidden sm:block">
        {category}
      </p>
    </div>
  );
}
