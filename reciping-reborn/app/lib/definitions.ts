export interface Category {
  id: string;
  name: Name;
  slug: string;
  description: string;
  page: Page;
}

export interface Name {
  text: string;
}

export interface Page {
  productImage: string;
  price: number;
  productId: string;
}
