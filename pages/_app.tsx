import React from 'react';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default MyApp;
