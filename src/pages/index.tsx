import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conhecer Tudo</title>
        <meta
          name="description"
          content="Conhecimento de graça sobre tudo e para todes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
