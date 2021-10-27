module.exports = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'es'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'es',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    async rewrites() {
      return [
        {
          source: '/es/works',
          destination: '/es/angel',
          locale: false // Use `locale: false` so that the prefix matches the desired locale correctly
        },
        {
          source: '/en/pony',
          destination: '/en/posts',
          locale: false
        }
      ]
    }
  }
}
