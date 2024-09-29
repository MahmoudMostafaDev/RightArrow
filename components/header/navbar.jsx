"use client";
import React from "react";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={`${classes.navbar} basis-1/3`}>
      <ul className="flex">
        <li
          className={
            usePathname() === "/" ? `${classes.selected} mx-auto` : "mx-auto"
          }
        >
          <Link href="/" className="text-center">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
