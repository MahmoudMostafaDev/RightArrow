import whatsapp from "./icons/whatsapp.png";
import Image from "next/image";
export default function InfoItem({ img, data, title }) {
  return (
    <div className=" text-center shadow-md px-4 py-10">
      <Image src={img} alt={title} className="mx-auto" />
      <h2 className="text-center text-black text-2xl mt-5 font-bold ">
        {title}
      </h2>
      {data.map((data) => (
        <p
          key={data}
          className="text-center text-[#3D3D3D] text-xl mt-2 font-bold font-mono break-words	 "
        >
          {data}
        </p>
      ))}
    </div>
  );
}
