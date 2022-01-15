import Head from 'next/head';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setLayout} from '../redux/layout/actions';
import Typography from '../components/generics/typography';

export default function About(): JSX.Element {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({showHeader: true}));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Rei Armenia ⎔ About</title>
      </Head>
      <div className={'h-full w-full'}>
        <Typography type="title" text={'This Page is **Under Construction**'}/>
      </div>
    </>
  );

}
