import Info from "./Info";
import Logo from "./Logo";
import Content from "./content";
export default function Footer() {
  return (
    <footer className="bg-secondryBackground mt-10 text-white flex flex-col md:flex-row justify-between gap-16 w-full bottom-0 p-10">
      <div className="basis-1/2 flex flex-col gap-10">
        <Logo />
        <Content />
      </div>
      <div className="basis-1/2 flex flex-col gap-10">
        <Info />
        <p className="text-xl">© 2024 RightArrow . All rights reserved.”</p>
      </div>
    </footer>
  );
}
