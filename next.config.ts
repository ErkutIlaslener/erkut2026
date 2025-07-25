import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photograph.ecarry.uk", // Bu da kalabilir
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Cloudinary
        port: "",
      },
    ],
  },
};

export default nextConfig;
