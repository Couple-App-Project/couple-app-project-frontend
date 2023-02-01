import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import router from 'next/router';

const Home: NextPage = () => {
    if (typeof window !== 'undefined') {
        const isToken = sessionStorage.getItem('access');
        isToken ? router.push('/home') : router.push('/login');
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>꾸욱</title>
                <meta property="og:title" content="꾸욱" key="title" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
};

export default Home;
