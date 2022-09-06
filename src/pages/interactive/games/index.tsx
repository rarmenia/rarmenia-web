import { NextPage } from 'next';

const GAMES_LIST = [
  {
    title: '2048',
    route: './2048',
    img: null,
  },
];

const Games: NextPage = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <p className="max-w-[56ch] my-10">
          Hi there! This page is a collection of games I recreated in react.
        </p>
        <p className="max-w-[56ch]">
          Please do not take this section too seriously, I am a web developer,
          not a game developer. These games are an opportunity for me to deal
          with more complex state and some concepts that I don&apos;t really get
          to touch in day to day.
        </p>
      </section>
    </>
  );
};

export default Games;
