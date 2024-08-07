export interface Product {
  productId: string;
  productImage: {
    url: string;
  };
  price: number;
  description: string;
}

export interface Category {
  id: string;
  name: Name;
  slug: string;
  description: string;
  page: Product;
}

export interface Name {
  text: string;
}
