import Image from "next/image";
import img from "./imgs/logo-card.png";
export default function ProductCard() {
  return (
    <div className="shadow-md px-4 py-10 flex justify-between items-center p-5 rounded-md ">
      <Image src={img} alt="logo" width={75} />
      <p className="text-center text-black text-2xl mt-2">Product</p>
      <p className="text-center text-gray-500 text-2xl mt-2">category</p>
    </div>
  );
}
