/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["thumbs.dreamstime.com", "example.com"],
    dangerouslyAllowSVG: false,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // disableStaticImages: true
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], 
  },
  experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
