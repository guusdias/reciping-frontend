// next.config.mjs

import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  env: {
    HYGRAPH_URL: process.env.HYGRAPH_URL || "",
    HYGRAPH_TOKEN: process.env.HYGRAPH_TOKEN || "",
  },
};

export default nextConfig;
