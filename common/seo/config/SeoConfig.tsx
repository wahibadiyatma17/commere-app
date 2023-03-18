import { DefaultSeoProps } from 'next-seo';

const NEXT_SEO_CONFIG = {
  defaultTitle: 'Logkar Commetce',
  description: 'Logkar Commerce',
  canonical: '#',
  openGraph: {
    type: 'website',
    title: 'Logkar',
    description: 'Logkar Commerce',
    images: [
      {
        url: '/icon/icon-logkar.png',
        alt: 'logkar commerce-icon',
        width: 120,
        height: 120,
      },
    ],
    url: '#',
    locale: 'en_US',
    site_name: 'Logkar',
  },
  twitter: {
    cardType: 'summary',
    site: '',
    handle: '',
  },
} as DefaultSeoProps;

export default NEXT_SEO_CONFIG;
