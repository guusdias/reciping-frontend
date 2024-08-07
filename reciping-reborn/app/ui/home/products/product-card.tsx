import Image from "next/image";
import { Product } from "@/app/lib/definitions";

interface ProductCardProps {
  products: Product[];
}

export default function ProductCard({ products }: ProductCardProps) {
  return (
    <div className="w-full">
      {products.map((product) => (
        <Image
          key={product.productId}
          alt="product-image"
          src={product.productImage.url}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
}
