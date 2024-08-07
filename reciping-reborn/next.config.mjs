import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  env: {
    HYGRAPH_URL: process.env.HYGRAPH_URL || "",
    HYGRAPH_TOKEN: process.env.HYGRAPH_TOKEN || "",
  },
  images: {
    domains: ["sa-east-1.graphassets.com"],
  },
};

export default nextConfig;
