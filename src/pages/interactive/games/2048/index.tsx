import { NextPage } from 'next';
// import Game2048 from "./game/Game2048";
import Game from './game/components/Game';

const Page2048: NextPage = () => {
  return (
    <>
      <Game shape={4} />
    </>
  );
};

export default Page2048;
