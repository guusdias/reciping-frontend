"use server";
import { fetchHygraphQuery } from "@/app/lib/fetch-hygraph-query";
import { Product } from "@/app/lib/definitions";

export const getShirtsData = async (): Promise<Product[]> => {
  const query = `
    query MyQuery {
      category(where: {slug: "t-shirts"}) {
        id
        name {
          text
        }
        slug
        description
        page {
          productImage {
            url
          }
          price
          productId
        }
      }
    }
  `;
  const data = await fetchHygraphQuery(query);
  return data.category.page ? [data.category.page] : [];
};
