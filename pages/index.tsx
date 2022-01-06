import type {NextPage} from 'next';
import Head from 'next/head';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setLayout} from '../redux/layout/actions';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({showHeader: false}));
  }, [dispatch]);

  return (<>
    <Head>
      <title>Rei Armenia ⎔ Front-End Developer</title>
    </Head>
    <main className={'w-screen h-screen flex items-center justify-center bg-stone-300 overflow-hidden'}>
      <div className={'w-full h-full md:w-2/3 md:h-auto'}>
        <div className={'h-full w-full min-w-full min-h-full bg-stone-100 shadow-stone-400 shadow-md drop-shadow flex flex-col overflow-auto'}>
          <div className={'flex flex-col items-center justify-center my-4'}>
            <h1 className={'text-2xl text-stone-800'}>Rei Armenia</h1>
            <div className={'mt-[-.5rem]'} role={'doc-subtitle'}>
              <span className={'text-[.75rem] text-stone-700'}>
                Full-Stack Web Developer&nbsp;
                <strong className={'text-stone-800 font-semibold'}>[Front End Focused]</strong>
              </span>
            </div>
          </div>
          <div className={'flex flex-col items-center justify-center my-8'}>
            <div className={'bg-amber-600 w-44 h-44 rounded-full'} />
          </div>
          <div className={'flex-grow'} />
          <div className={'flex flex-col items-center justify-center my-4 justify-self-end'}>
            <div className={'text-[.75rem]'}>
              New York State Department of Information Technology Services
            </div>
            <div className={'text-[.75rem]'}>
              <strong className={'text-stone-800 font-semibold'}>
                Information Technology Specialist 2 (Programming)
              </strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>);
};

export default Home;
