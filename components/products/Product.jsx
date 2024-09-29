import Link from "next/link";
import Image from "next/image";
export default function Product({ img, link, category, full }) {
  return (
    <Link
      href={link}
      className={`mx-auto sm:mx-0 ${
        full &&
        "col-span-1 sm:col-span-2 md:sm:col-span-3  sm:max-w-[300px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] mx-auto"
      }`}
    >
      <Image
        src={img}
        alt="img"
        className={`mx-auto ${
          full
            ? "  sm:max-w-[300px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px]"
            : ""
        }`}
      />

      <h2 className="text-center text-white text-4xl sm:text-2xl md:text-3xl mt-2  p-2 sm:p-4">
        {category}
      </h2>
    </Link>
  );
}
