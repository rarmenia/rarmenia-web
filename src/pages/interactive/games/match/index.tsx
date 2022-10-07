import { NextPage } from 'next';
import Game from './game/Game';

const PageMatch: NextPage = () => {
  const render = () => (
    <>
      <Game requiredMatches={8} />
    </>
  );

  return render();
};

export default PageMatch;
