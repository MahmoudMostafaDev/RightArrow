"use client";
import ProductCard from "@/components/products/ProductCard";
import Line from "@/components/ui/line";
import { useParams } from "next/navigation";
import getProduct from "@/lib/getProducts";
import { useEffect, useState } from "react";
export default function Page() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  window.scrollTo(0, 0);
  useEffect(() => {
    async function getProductsFn() {
      console.log(await getProduct(category));
      setProduct(await getProduct(category));
      setLoading(false);
    }
    getProductsFn();
  }, [category]);

  if (loading) {
    return <div className="grid place-content-center h-[50vh]">Loading...</div>;
  } else if (!product) {
    return (
      <div className="grid place-content-center h-[50vh]">
        Can not find products
      </div>
    );
  }
  return (
    <div className=" bg-[#f5f5f5] pt-10 min-h-[50vh]">
      {product && <Line Title={category} />}
      {product &&
        (product["sub-category"].length === 0 ||
          product["sub-category"][0] === "none") && (
          <div className=" grid lg:grid-cols-2 gap-10 p-10 lg:container mx-auto grid-cols-1 ">
            {product.products.map((product) => {
              if (product.Subcategory === null) {
                return (
                  <ProductCard
                    key={product.name}
                    product={product.name}
                    category={category}
                  />
                );
              }
            })}
          </div>
        )}
      {product &&
        product["sub-category"].length > 0 &&
        product["sub-category"].map((ele) => {
          if (ele === "none") {
            return null;
          }
          return (
            <>
              <h2 className="text-center text-black text-3xl mt-5 font-bold ">
                {ele}
              </h2>
              <div className="min-h-[50vh] grid lg:grid-cols-2 gap-10 p-10 lg:container mx-auto grid-cols-1 ">
                {product.products.map((product) => {
                  if (product.Subcategory === ele) {
                    return (
                      <ProductCard
                        key={product.name}
                        product={product.name}
                        category={`${ele}`}
                      />
                    );
                  }
                })}
              </div>
            </>
          );
        })}
    </div>
  );
}
