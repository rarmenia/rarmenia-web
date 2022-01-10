import Head from 'next/head';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {setLayout} from '../redux/layout/actions';
import Card from '../components/card';
import {Typography} from '../components/typography';
import {useDocumentData} from 'react-firebase-hooks/firestore';
import {doc, getFirestore} from 'firebase/firestore';
import {firebaseApp} from '../firebase/client';
import Image from 'next/image';

const infoPlaceholder = {
  name: {
    first: 'Rei',
    last: 'Armenia',
    full: 'Rei Armenia'
  },
  title: 'Front End Architect',
  currentEmployer: 'New York State',
  currentDepartment: 'Office of Information Technology Services',
  currentPosition: 'Information Technology Specialist 2 - Programming',
  currentRole: 'Front End Developer & Architect',
};

function Home() {

  const dispatch = useDispatch();


  const [info, loading, error] = useDocumentData(
    doc(getFirestore(firebaseApp), 'about', 'general'),
    {
      snapshotListenOptions: {includeMetadataChanges: true}
    }
  );
  console.log({info, loading, error});

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
      <div className={'w-full h-auto md:w-auto'}>
        <Card className={'md:mx-20'}>
          <div className={'flex flex-row items-center justify-center gap-16'}>
            <div className={'flex flex-col items-center justify-center my-8'}>
              <div className={'bg-amber-600 w-44 h-44 rounded-full'}/>
            </div>
            <div className={'flex flex-col items-center justify-center'}>
              <Typography type="title" style={{weight: 'light', className: 'text-stone-800'}}>
                <span className="text-amber-600">{info?.name?.first}</span>
                <span>&nbsp;{info?.name.last}</span>
              </Typography>
              <Typography type="subtitle" text={info?.profession}
                          style={{weight: 'semibold', className: 'text-stone-700'}}/>
              <div className={'flex flex-col items-center mt-10'}>
                <Typography type='paragraph' text={info?.work?.employer} style={{weight: 'semibold', className:'text-stone-800 text-[1rem]'}}/>
                <Typography type='paragraph' text={info?.work?.division} style={{weight: 'light', className:'text-stone-700 text-[.75rem]'}}/>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  </>);
}

export default Home;
