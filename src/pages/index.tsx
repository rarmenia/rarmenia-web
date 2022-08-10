import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main className="w-screen h-screen grid place-items-center">
      <div className="bg-red-100 text-red-800 font-semibold">
        <div>
          You should not be seeing this page, click{' '}
          <Link href="/portfolio">THIS</Link> to redirect to the correct page.
        </div>
      </div>
    </main>
  );
};

export default Home;
