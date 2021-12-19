import type { NextPage } from 'next'
import Head from 'next/head'
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {setLayout} from '../redux/layout/actions';

const Home: NextPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({showHeader: false}))
  }, [dispatch])

  return (<>
    <Head>
      <title>Rei Armenia ⎔ Front-End Developer</title>
    </Head>
    <main className={'h-screen w-screen min-h-screen min-w-screen'}>
      <p>landing page</p>
    </main>
  </>)
}

export default Home
