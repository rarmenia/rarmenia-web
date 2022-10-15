import { NextPage } from 'next';

const PageHereWeAre: NextPage = () => {
  const render = () => (
    <div
      className="h-screen w-screen grid place-items-center"
      style={{ backgroundColor: 'hsla(10, 80%, 80%)' }}
    >
      <div
        className="text-xs font-bold animate-fade-in-down"
        style={{ color: 'hsla(30, 90%, 30%)', mixBlendMode: 'screen' }}
      >
        BITCH
      </div>
    </div>
  );

  return render();
};

export default PageHereWeAre;
