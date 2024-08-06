"use client";
import Image from "next/image";
import { Category } from "@/app/lib/definitions";

export default async function ProductCart({
  products,
}: {
  products: Category[];
}) {
  return (
    <div className="w-full">
      {products?.map((product) => (
        <Image src={product.productImage}></Image>
      ))}
    </div>
  );
}
