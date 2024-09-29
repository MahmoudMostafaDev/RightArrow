import Line from "../ui/line";
import Product from "./Product";
import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";

export default function products() {
  return (
    <div className="mt-20 bg-secondryBackground p-7 pt-7 md:px-0">
      <Line Title="Our Products" />
      <div>
        <div className="flex gap-y-16  flex-col sm:flex-row justify-center">
          <Product img={img1} link="/products/1" category="Product 1" />
          <Product img={img2} link="/products/2" category="Product 2" />
          <Product img={img3} link="/products/3" category="Product 3" />
        </div>
      </div>
    </div>
  );
}
