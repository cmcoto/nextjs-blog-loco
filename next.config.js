module.exports = {
    i18n: {
      locales: ['en', 'es', 'de'],
      defaultLocale: 'de',
    },

   //Esta funcion para generar el sitemap en el lugar que debe estar da problema con el locomotive scroll...especialmente el scroll.destroy
    /* async rewrites() {
      return {
        afterFiles: [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
       ]
      }
    },*/
    

  };