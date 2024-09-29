import ProductCard from "@/components/products/ProductCard";
import Line from "@/components/ui/line";

export default function page() {
  return (
    <div className=" bg-[#f5f5f5] pt-10">
      <Line Title="Contact Us" />
      <div className="min-h-[50vh] grid lg:grid-cols-2 gap-10 p-10 lg:container mx-auto grid-cols-1 bg-[#f5f5f5]"></div>
    </div>
  );
}
