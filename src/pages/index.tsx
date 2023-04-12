import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Portfolio from './portfolio/Portfolio';
import PortfolioTopBar from './portfolio/PortfolioTopBar';
import Head from 'next/head';

const Home: NextPageWithLayout = () => {
  return (
    <Portfolio />
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Rei Armenia</title>
      </Head>
      <PortfolioTopBar />
      {page}
    </>
  );
};


export default Home;
