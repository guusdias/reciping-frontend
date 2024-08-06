import { fetchHygraphQuery } from "@/app/lib/fetch-hygraph-query";

export const getPageData = async () => {
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
}   `;
  return fetchHygraphQuery(query);
};
