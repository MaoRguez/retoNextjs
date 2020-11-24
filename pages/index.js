import Head from 'next/head'
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Main from '../components/Main';

export default function Home() {
  const Master = styled.main`
    width: 100%;
    padding: 0;
  `;

  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Master>
          <Main />
        </Master>
      </Layout>
    </div>
  )
}
