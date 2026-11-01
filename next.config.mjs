
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },

  reactCompiler: true,
};

export default nextConfig;
