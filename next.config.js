/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during development to focus on fixing the styles
    ignoreDuringBuilds: true,
  },
  // Disable symlinks which can cause issues on Windows, especially with OneDrive
  experimental: {
    // Use more stable configuration options
    appDocumentPreloading: false,
  },
  // Skip type checking during build to speed up build process
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configure images for static export
  images: {
    unoptimized: true,
  },
  // Add trailing slash for all routes (static export)
  trailingSlash: true,
  // Output as static export (Next 14+)
  output: 'export',
  // Ensure all assets are copied to output directory
  assetPrefix: "",
}

module.exports = nextConfig 