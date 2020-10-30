const withMDX = require("@next/next-mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
