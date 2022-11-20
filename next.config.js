const path = require("path");
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
 
  trailingSlash: true,
  optimizeFonts: false,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
});
