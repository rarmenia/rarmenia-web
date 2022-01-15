import Head from 'next/head';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setLayout} from '../redux/layout/actions';
import Image from 'next/image';
import BusinessCard from '../components/app/business-card/business-card';


export default function Home(): JSX.Element {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({showHeader: false}));
  }, [dispatch]);

  return (<>
    <Head>
      <title>Rei Armenia ⎔ Front-End Developer</title>
    </Head>
    <Image
      src="/img/winooski.jpg"
      alt={'Image of Winooski River'}
      layout={'fill'}
      objectFit={'cover'}
      objectPosition={'center'}
      className={'blur-sm background-landing'}
    />
    <main
      className={'w-screen h-screen flex items-center justify-center bg-stone-800 overflow-hidden'}
    >
      return (
      <div className={'w-full h-auto md:w-auto'}>
        <BusinessCard
          // buttonRoute={'/about'}
        />
      </div>
      );
    </main>
  </>);
}

