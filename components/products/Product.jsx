import Link from "next/link";
import Image from "next/image";
export default function Product({ img, link, category }) {
  return (
    <Link href={link} className="mx-auto sm:mx-0">
      <Image src={img} alt="img" />
      <h2 className="text-center text-white text-4xl sm:text-2xl md:text-3xl mt-2  p-2 sm:p-4">
        {category}
      </h2>
    </Link>
  );
}
