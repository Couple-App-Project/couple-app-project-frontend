import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import router from 'next/router';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                {/* <meta
                    http-equiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                /> */}
                <title>꾸욱</title>
            </Head>
        </div>
    );
};

export default Home;
