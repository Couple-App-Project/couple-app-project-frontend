import React from 'react';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
    DehydratedState,
} from 'react-query';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import BottomNavi from 'feature/common/components/BottomNavi';
import Device from 'layouts/Device';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/theme';

function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
    const [queryClient] = React.useState(
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
            <ThemeProvider theme={defaultTheme}>
                <Device>
                    <Hydrate state={pageProps.dehydratedState}>
                        <RecoilRoot>
                            <Head>
                                <title>꾸욱</title>
                            </Head>
                            <Component {...pageProps} />
                        </RecoilRoot>
                    </Hydrate>
                    {hasBottomNavi(router.pathname) ? <BottomNavi /> : ''}
                </Device>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
