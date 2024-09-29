import Link from "next/link";
import Logo from "./logo";
import Navbar from "./navbar";
import Button from "../ui/button";

export default function Header({ className }) {
  return (
    <header className={`flex items-center justify-between p-6 ${className}`}>
      <Logo />
      <Navbar />
      <Link href="#contactus">
        <Button main>Contact Us</Button>
      </Link>
    </header>
  );
}
