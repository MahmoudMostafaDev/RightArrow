import Button from "@/components/ui/button";
import Link from "next/link";
export default function Content() {
  return (
    <div className="absolute top-1/2 left-5 sm:left-20 -translate-y-1/2 w-4/5 sm:w-2/5">
      <h1 className="text-lg md:text-3xl font-bold text-white">
        Premium Silkscreen Printing Materials for Professional Results
      </h1>
      <p className="mt-2 text-gray-300 hidden sm:block text-sm md:text-lg">
        High-Quality Silkscreen Supplies for Perfect Prints Every Time, Offering
        a Wide Range of Products to Meet All Your Silkscreen Printing Needs
      </p>
      <div className="flex  gap-2 mt-5">
        <Link href="#products">
          {" "}
          <Button>Products</Button>{" "}
        </Link>
        <Link href="#contactus">
          <Button main className={"hidden sm:block"}>
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
