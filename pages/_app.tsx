import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
    DehydratedState,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import BottomNavi from 'feature/common/components/BottomNavi';
import Device from 'layouts/Device';
import defaultTheme from 'styles/theme';

function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: false,
                    },
                },
            }),
    );
    const router = useRouter();

    if (typeof window !== 'undefined') {
        const refreshToken = sessionStorage.getItem('refresh');
        if (
            router.pathname !== '/login' &&
            router.pathname !== '/signup' &&
            router.pathname !== '/couplecode' &&
            router.pathname !== '/coupleinfo' &&
            refreshToken === null
        ) {
            // alert('로그인 후 사용하세요');
            router.push('./login');
        }
    }

    const hasBottomNavi = (pathname: string) => {
        if (
            pathname === '/home' ||
            pathname === '/calendar' ||
            pathname === '/diary' ||
            pathname === '/mypage'
        )
            return true;
        else return false;
    };

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Hydrate state={pageProps.dehydratedState}>
                <RecoilRoot>
                    <ThemeProvider theme={defaultTheme}>
                        <Device>
                            <Head>
                                <title>꾸욱</title>
                            </Head>
                            <Component {...pageProps} />
                            {hasBottomNavi(router.pathname) && <BottomNavi />}
                        </Device>
                    </ThemeProvider>
                </RecoilRoot>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
