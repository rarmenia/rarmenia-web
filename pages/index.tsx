import Head from 'next/head';
import {useDispatch} from 'react-redux';
import {useEffect } from 'react';
import {setLayout} from '../redux/layout/actions';
import Card from '../components/card';
import firebase from '../firebase/client-app';

const infoPlaceholder = {
  fName: 'Rei',
  lName: 'Armenia',
  title: 'Front End Architect',
  currentEmployer: 'New York State',
  currentDepartment: 'Office of Information Technology Services',
  currentPosition: 'Information Technology Specialist 2 - Programming',
  currentRole: 'Front End Developer & Architect',
};

function Home() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setLayout({showHeader: false}));
  }, [dispatch]);

  console.log(process.env)


  return (<>
    <Head>
      <title>Rei Armenia ⎔ Front-End Developer</title>
    </Head>
    <main className={'w-screen h-screen flex items-center justify-center bg-stone-300 overflow-hidden'}>
      <div className={'w-full h-auto md:w-2/3 md:h-auto'}>
        <Card>
          <div className={'flex flex-col items-center justify-center'}>
            <h1 className={'text-2xl text-stone-800 font-light'}>
              {/*<span className={'text-amber-600'}>{info.fName}</span>*/}
              {/*&nbsp;{info.lName}*/}
            </h1>
            <p className={'text-stone-700 font-semibold mt-[-.5rem] text-[.75rem]'} role={'doc-subtitle'}>
              {/*{info.title}*/}
            </p>
          </div>
        </Card>
        {/*<div className={'h-full w-full min-w-full min-h-full bg-stone-100 shadow-stone-400 shadow-md drop-shadow flex flex-col overflow-auto'}>*/}
        {/*  <div className={'flex flex-col items-center justify-center my-4'}>*/}
        {/*    <h1 className={'text-2xl text-stone-800'}>Rei Armenia</h1>*/}
        {/*  </div>*/}
        {/*  <div className={'flex flex-col items-center justify-center my-8'}>*/}
        {/*    <div className={'bg-amber-600 w-44 h-44 rounded-full'} />*/}
        {/*  </div>*/}
        {/*  <div className={'flex-grow'} />*/}
        {/*  <div className={'flex flex-col items-center justify-center my-4 justify-self-end'}>*/}
        {/*    <div className={'text-[.75rem]'}>*/}
        {/*      New York State Department of Information Technology Services*/}
        {/*    </div>*/}
        {/*    <div className={'text-[.75rem]'}>*/}
        {/*      <strong className={'text-stone-800 font-semibold'}>*/}
        {/*        Information Technology Specialist 2 (Programming)*/}
        {/*      </strong>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </main>
  </>);
};

export default Home;
