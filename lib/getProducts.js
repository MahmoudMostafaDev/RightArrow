"use server";
import { promises } from "fs";
import path from "path";

export async function getProducts() {
  const filePath = path.join(process.cwd(), "lib/products.json");
  const jsonData = await promises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return objectData;
}

export default async function getProduct(category) {
  const products = await getProducts();
  let product = null;
  products.forEach((ele) => {
    if (ele.category === category) {
      product = ele;
    }
  });
  return product;
}
