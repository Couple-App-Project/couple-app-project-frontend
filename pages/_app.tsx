import React from 'react';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
    DehydratedState,
} from 'react-query';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import BottomNavi from 'feature/common/components/BottomNavi';
import Device from 'layouts/Device';
import Head from 'next/head';

function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Device>
                <Hydrate state={pageProps.dehydratedState}>
                    <RecoilRoot>
                        <Head>
                            <title>꾸욱</title>
                        </Head>
                        <Component {...pageProps} />
                    </RecoilRoot>
                </Hydrate>
                <BottomNavi />
            </Device>
        </QueryClientProvider>
    );
}

export default MyApp;
