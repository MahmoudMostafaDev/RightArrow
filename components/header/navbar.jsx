"use client";
import React from "react";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={`${classes.navbar}`}>
      <ul className="flex gap-5">
        <li className={usePathname() === "/" ? `${classes.selected}` : ""}>
          <Link href="/products">Home</Link>
        </li>
        <li
          className={usePathname() === "/products" ? `${classes.selected}` : ""}
        >
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
