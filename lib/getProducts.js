import json from "./products.json";

export default async function getProduct(category) {
  const products = json;
  let product = null;
  products.forEach((ele) => {
    if (ele.category === category) {
      product = ele;
    }
  });
  return product;
}
