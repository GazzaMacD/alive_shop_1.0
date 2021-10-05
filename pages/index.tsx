import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/page-styles/Home.module.scss';
import { Footer } from '@/components/modules/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alive Shop</title>
      </Head>

      <main>
        <h1>Alive Shop</h1>
      </main>
      <Footer>
        <p>Footer Stuff</p>
      </Footer>
    </div>
  );
};

export default Home;
