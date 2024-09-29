import React from "react";
import Images from "./Images";
import Content from "./content";
import Line from "../ui/line";

export default function About({ className }) {
  return (
    <>
      <Line Title="About Us" />
      <div className={`flex gap-20 justify-between ${className}`}>
        <Images className="hidden md:block" />
        <Content />
      </div>
    </>
  );
}
