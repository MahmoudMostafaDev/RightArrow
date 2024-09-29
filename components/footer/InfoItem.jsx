import Image from "next/image";

export default function InfoItem({ img, data }) {
  return (
    <li className="flex items-center gap-5">
      <Image src={img} width={25} alt="location" />
      <p className="text-gray-300 text-lg font-bold">{data}</p>
    </li>
  );
}
