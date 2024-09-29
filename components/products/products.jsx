import Line from "../ui/line";
import Product from "./Product";
import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";
import img4 from "./imgs/one.png";
import img5 from "./imgs/silk.png";
import img6 from "./imgs/pig.png";
import img7 from "./imgs/add.png";

export default function products() {
  return (
    <div className="mt-20 bg-secondryBackground p-7 pt-7 md:px-0">
      <Line Title="Our Products" />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mx-auto md:w-5/6 mt-24 ">
          <Product img={img1} link="/products/Plastizol" category="Plastizol" />
          <Product
            img={img2}
            link="/products/Water-base"
            category="Waterbase"
          />
          <Product img={img4} link="/products/Binders" category="Binders" />
          <Product
            img={img3}
            link="/products/Photo-Emulsion"
            category="Photo Emulsion"
          />
          <Product img={img5} link="/products/Silk-Mesh" category="Silk" />
          <Product img={img6} link="/products/Pigments" category="Pigments" />
          <Product
            img={img7}
            link="/products/Supplementary-Materials"
            category="Supplementary Materials"
            full
          />
        </div>
      </div>
    </div>
  );
}
