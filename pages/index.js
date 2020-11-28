import React from  'react';
import Head from 'next/head'
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Main from '../components/Main';

export default function Home() {
  const Master = styled.main`
    width: 100%;
    padding: 0;
    @media screen and (max-width: 425px) {
      margin-left: 13px;
    }
    @media screen and (max-width: 375px) {
      margin-left: 40px;
    }
  `;
  const Wrapper = styled.section`
    width: 100%;
    height: 100%;
  `;

  return (
    <Wrapper>
      <Head>
        <title>Rick and Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
          <Master theme>
            <Main />
          </Master>
        </Layout>
    </Wrapper>
  )
}
