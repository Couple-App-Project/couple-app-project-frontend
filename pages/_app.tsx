import React from 'react';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
    DehydratedState,
} from 'react-query';
import {useRouter} from 'next/router';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import BottomNavi from 'feature/common/components/BottomNavi';

function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
    const [queryClient] = React.useState(() => new QueryClient());
    const router = useRouter();
    // router.beforePopState(()=>{
    //     if(sessionStorage.getItem('access')===null) {
    //         router.push('/login')
    //     }
    // })

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Hydrate state={pageProps.dehydratedState}>
                <RecoilRoot>
                    <Component {...pageProps} />
                </RecoilRoot>
            </Hydrate>

            {router.pathname!=='/login'?<BottomNavi/>:''}
            
        </QueryClientProvider>
    );
}

export default MyApp;
