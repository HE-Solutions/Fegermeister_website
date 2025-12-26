/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// Set this in GitHub Actions, e.g. "/<repo>"
// Locally it stays empty, so dev works as usual.
const basePath =
    isProd && process.env.NEXT_PUBLIC_BASE_PATH
        ? process.env.NEXT_PUBLIC_BASE_PATH.replace(/\/$/, "") // trim trailing slash
        : "";

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    output: "export",
    trailingSlash: true, // .../seite/index.html
    images: { unoptimized: true }, // nötig für Static Export

    // GitHub Pages Project-Page support (no hardcoded repo name)
    basePath,
    assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
