import Head from 'next/head';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setLayout} from '../redux/layout/actions';
import Typography from '../components/generics/typography';
import AboutMeCard from '../components/app/about-card/about-card';
import {CollectionResolver} from '../components/generics/firebase-resolvers';
import {Job} from '../interfaces/job';
import JobCard from '../components/app/job-card/job-card';

export default function About(): JSX.Element {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayout({showHeader: true}));
  }, [dispatch]);

  return (
    <>
      <style jsx global>{`
        body {
          background: #f5f5f4;
        }
      `}</style>
      <Head>
        <title>Rei Armenia ⎔ About</title>
      </Head>
      <main className={'h-full w-full'}>
        <div className={'my-4 md:mx-4 flex flex-col items-center justify-center gap-6'}>
          <div className={'mt-2'}>
            <Typography type={'heading'} style={{className: 'text-3xl'}}>
              <span>
                <span>&nbsp;-&nbsp;About&nbsp;</span>
                <span className={'text-amber-700'}>&nbsp;ME&nbsp;</span>
                <span>-</span>
              </span>
            </Typography>
          </div>
          <div className={'w-full mt-2 md:w-auto md:min-w-[80%] md:max-w-[80%]'}>
            <AboutMeCard/>
          </div>
          <div className={'mt-2'}>
            <Typography type={'heading'} style={{className: 'text-3xl'}}>
              <span>
                <span>&nbsp;-&nbsp;Work&nbsp;</span>
                <span className={'text-amber-700'}>&nbsp;Experience&nbsp;</span>
                <span>-</span>
              </span>
            </Typography>
          </div>
          <div className={'w-full mt-2'}>
            <CollectionResolver<Job> path={'about/work/jobs'}>
              {
                ({data}) => (<div className={'w-full flex flex-col gap-8 items-center justify-center'}>
                  {
                    (data ?? []).sort((a, b) => a.employment?.start?.toMillis() ?? 0 - b.employment?.start?.toMillis() ?? 0).map((job, index) => {
                      return (
                        <div key={index} className={'w-full md:w-auto md:min-w-[80%] md:max-w-[80%]'}>
                          <JobCard job={job}/>
                        </div>
                      );
                    })
                  }
                </div>)
              }
            </CollectionResolver>
          </div>
        </div>
      </main>
    </>
  );

}
