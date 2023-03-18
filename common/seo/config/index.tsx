import React from 'react';

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import NEXT_SEO_CONFIG from './SeoConfig';

const DefaultSEO: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/icon-logkar.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/icon-logkar.ico" />
        <link rel="mask-icon" href="/referral/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Logkar Commerce" />
        <meta name="application-name" content="Logkar Commerce" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#f1f3f6" />
      </Head>
      <DefaultSeo {...NEXT_SEO_CONFIG} />
    </>
  );
};

export default DefaultSEO;
