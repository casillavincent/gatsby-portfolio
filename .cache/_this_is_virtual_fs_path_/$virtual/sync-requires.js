
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/vince/Desktop/GitHub/gatsby-portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/vince/Desktop/GitHub/gatsby-portfolio/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/vince/Desktop/GitHub/gatsby-portfolio/src/pages/index.js"))
}

