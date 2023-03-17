import React from 'react';
import { NextPage } from 'next';
import 'twin.macro';

import SEO from '@/common/seo';
import Login from '@/components/Container/Login';

const LoginPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Logkar Commerce"
        description="Logkar Commerce App"
        openGraph={{
          type: 'website',
          title: 'Logkar Commerce',
          description: 'Logkar Commerce App',
          images: [
            {
              url: '/icon/icon-logkar.png',
              alt: 'logkar commerce-icon',
            },
          ],
          url: '#',
          locale: 'en_US',
          site_name: 'Logkar Commerce',
        }}
      />
      <Login />
    </>
  );
};

export default LoginPage;
