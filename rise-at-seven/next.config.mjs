/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // image quality values
  images: {
    qualities: [75, 90, 100], // add all quality values you use
  },
};

export default nextConfig;
