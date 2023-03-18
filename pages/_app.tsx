import React from 'react';
import type { AppProps } from 'next/app';

import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';

import queryClient from '@/common/config/queryClient';
import 'styles/globals.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import DefaultSEO from '@/common/seo/config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSEO />
      <Toaster containerStyle={{ zIndex: 10000 }} position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
