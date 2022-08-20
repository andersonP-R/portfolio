/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM({
  transpileModules: ["gsap"],
});

module.exports = nextConfig;
