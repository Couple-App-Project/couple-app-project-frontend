import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>꾸욱</title>
            </Head>
        </div>
    );
};

export default Home;
