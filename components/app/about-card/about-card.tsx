import {GeneralInfo} from '../../../interfaces/general-info';
import Card from '../../generics/card';
import Typography from '../../generics/typography';
import Image from 'next/image';
import BusinessCardWork from '../business-card/business-card-work';
import {DocumentResolver} from '../../generics/firebase-resolvers';

export default function AboutMeCard(): JSX.Element {

  const getAge = (birthDate: Date): number => {
    return (new Date(Date.now() - birthDate.getTime())).getUTCFullYear() - 1970;
  };

  return (
    <DocumentResolver<GeneralInfo> path={'about/general'}>
      {
        ({data}) => (<>
          {data && (<>
            <Card className={'md:rounded-[.125rem] p-4 text-center'}>
              <div className={'flex flex-col items-center justify-center gap-8 px-8'}>
                <div className={'flex flex-col items-center justify-center'}>
                  <Typography type={'paragraph'} style={{weight: 'semibold', className: 'text-xl'}}>
                    <span>
                      <span>Hi! I&apos;m&nbsp;</span>
                      <span className={'text-amber-700'}>{data.name.first}</span>
                      <span>!</span>
                    </span>
                  </Typography>
                  <Typography type={'paragraph'} style={{weight: 'semibold', className: 'text-sm text-stone-700'}}>
                    <span>I&apos;m a <span className={'text-amber-700'}>{getAge(data.birthdate.toDate())}</span> year old <span
                      className={'text-amber-700'}>{data.profession}</span> from <span
                      className={'text-amber-700'}>{data.from}</span>!</span>
                  </Typography>
                </div>
                <div className={'flex flex-col md:flex-row gap-6 items-center justify-center'}>
                  <Image
                    src="/img/profile.png"
                    alt={'profile image'}
                    height="176"
                    width="176"
                    className={'rounded-full bg-amber-600'}
                  />
                  <div className={'flex flex-col items-center justify-center gap-6'}>
                    <div className={'flex flex-col items-center justify-center'}>
                      <BusinessCardWork showPosition={true}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                      <Typography type={'paragraph'} text={data.education[data.education.length - 1].degree}
                                  style={{weight: 'semibold', className: 'text-md text-stone-800'}}/>
                      <Typography type={'paragraph'} text={data.education[data.education.length - 1].major}
                                  style={{weight: 'normal', className: 'text-sm text-amber-700'}}/>
                      <Typography type={'paragraph'} style={{weight: 'thin', className: 'text-sm'}}>
                        <span>
                          <span>from </span>
                          <span
                            className={'text-stone-800 font-bold'}>{data.education[data.education.length - 1].school}</span>
                        </span>
                      </Typography>
                      <Typography type={'paragraph'} text={data.education[data.education.length - 1].location}
                                  style={{weight: 'thin', className: 'text-sm'}}/>
                    </div>
                  </div>
                </div>
                <div className={'flex flex-row align-center justify-center'}>
                  <Typography type={'paragraph'} style={{weight: 'thin', className: 'text-sm'}}>
                    <span>
                      I am an architect with a passion for accessibility and simplicity.
                    </span>
                    <br/>
                    <span>
                      My guiding principle is that <b className={'text-amber-700'}>people</b> should always come first.
                    </span>
                  </Typography>
                </div>
              </div>
            </Card>
          </>)}
        </>)
      }
    </DocumentResolver>
  );

}
