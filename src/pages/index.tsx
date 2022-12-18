import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conhecer Tudo</title>
        <meta
          name="description"
          content="Conhecimento de graça sobre tudo e para todes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
