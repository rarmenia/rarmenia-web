import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Portfolio from './portfolio/Portfolio';
import PortfolioTopBar from './portfolio/PortfolioTopBar';

const Home: NextPageWithLayout = () => {
  return (
    <Portfolio />
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <PortfolioTopBar />
      {page}
    </>
  );
};


export default Home;
