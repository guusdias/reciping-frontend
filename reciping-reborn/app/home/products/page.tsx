import ProductCard from "@/app/ui/home/products/product-card";
import { getShirtsData } from "@/app/lib/actions";

export default async function Page() {
  const products = await getShirtsData();

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}
