import Card from '../../generics/card';
import {useRouter} from 'next/router';
import BusinessCardName from './business-card-name';
import BusinessCardWork from './business-card-work';
import Image from 'next/image';

interface Props {
  buttonRoute?: string;
}

export default function BusinessCard(props: Props): JSX.Element {
  const router = useRouter();

  return (
    <Card className={'md:rounded-[.5rem]'}>
      <div className={'flex flex-col items-center justify-center md:px-20'}>
        <div className={'flex flex-row items-center justify-center gap-16'}>
          <div className={'flex flex-col items-center justify-center my-8'}>
            <Image
              src="/img/profile.png"
              alt={'profile image'}
              height="176"
              width="176"
              className={'rounded-full bg-amber-600'}
            />
          </div>
          <div className={'flex flex-col items-center justify-center gap-8'}>
            <BusinessCardName/>
            <BusinessCardWork/>
          </div>
        </div>
        {props.buttonRoute && <div className={'flex flex-row items-center justify-center mb-6 w-1/2'}>
            <button type="button" onClick={() => router.push(props.buttonRoute ?? '/')}
                    className={'bg-amber-700 hover:bg-amber-600 focus:bg-amber-600 text-white font-bold py-4 px-8 w-full rounded-[.875rem]'}>
                More About Me
            </button>
        </div>}
      </div>
    </Card>
  );
}
