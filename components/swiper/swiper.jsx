"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import right from "./imgs/right.png";
import left from "./imgs/left.png";
import one from "./imgs/1.png";
import two from "./imgs/2.png";
import three from "./imgs/3.png";
import Content from "./content";
const imgs = [one, two, three];

export default function Swiper({ className }) {
  const [imgIndex, setImgIndex] = useState(0);
  let interval;
  useEffect(() => {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      setImgIndex((imgIndex) =>
        imgIndex === imgs.length - 1 ? 0 : imgIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [imgIndex, interval, setImgIndex]);
  return (
    <div className={`relative ${className}`}>
      <div className=" h-[35vh] sm:h-[50vh] xl:h-[65vh] mx-5 overflow-hidden rounded-3xl relative ">
        <div
          className=" flex h-[35vh]  sm:h-[50vh] xl:h-[65vh] max-w-full"
          style={{
            translate: `-${imgIndex * 100}%`,
            transition: "0.5s ease",
          }}
        >
          {imgs.map((img, index) => (
            <Image
              src={img}
              alt="swiper"
              key={index}
              className="min-w-full"
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>
        <Content />
        <button
          onClick={() =>
            setImgIndex((imgIndex) =>
              imgIndex === imgs.length - 1 ? 0 : imgIndex + 1
            )
          }
          className="absolute hidden sm:block top-1/2 right-5 -translate-y-1/2"
        >
          <Image src={right} alt="right" className="" width={40} />
        </button>
        <button
          onClick={() =>
            setImgIndex((imgIndex) =>
              imgIndex === 0 ? imgs.length - 1 : imgIndex - 1
            )
          }
          className="absolute hidden sm:block top-1/2 left-5 -translate-y-1/2"
        >
          <Image src={left} alt="right" className="" width={40} />
        </button>
      </div>
    </div>
  );
}
