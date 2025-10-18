/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove unsupported experimental options for Netlify/Next build
  eslint: {
    // Don't block builds on ESLint errors (Netlify CI)
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
