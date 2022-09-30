type StringByLocaleMap = { [locale: string]: string };

// const MachineryMarketPriceSlugs: StringByLocaleMap = {
//   en: 'service-machinery-market-price',
//   de: 'werkzeug-preisbewertung-fur-gebrauchtmaschinen',
//   es: 'herramienta-evaluacion-precio-maquinaria-usada',
//   fr: 'outil-estimation-prix-machines-occasion',
//   it: 'strumento-valutazione-prezzo-macchinari-usati',
//   nl: 'werktuig-evaluatie-prijs-gebruikte-machines',
//   pl: 'wycena-narzedzie-do-wyceny-uzywanych-maszyn-urzadzen'
// };



enum RouteName {
  CATEGORY = 'category',
  HOME = 'home',
}

export const ROUTE_PATH = {
  HOME: '/',
  CATEGORY: '/category',
};

export type { StringByLocaleMap };

export {
//   MachineryMarketPriceSlugs,
  RouteName,
};
