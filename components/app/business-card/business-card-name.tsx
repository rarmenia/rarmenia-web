import {GeneralInfo} from '../../../interfaces/general-info';
import Typography from '../../generics/typography';
import {CakeIcon} from '@heroicons/react/solid';
import {DocumentResolver} from '../../generics/firebase-resolvers';


export default function BusinessCardName(): JSX.Element {

  const isBirthday = (birthdate: Date): boolean => {
    const today = new Date();
    return today.getMonth() === birthdate.getMonth() && today.getDate() === birthdate.getDate();
  };

  return <DocumentResolver<GeneralInfo> path={'about/general'}>
    {(
      ({data, error}) => (<>
        {(data && !error) ? (
          <div className={'flex flex-col items-center justify-center'}>
            <Typography type="title" style={{weight: 'light', className: 'text-stone-800'}}>
              <span className="text-amber-700">{data.name.first ?? ''}</span>
              <span>&nbsp;{data.name.last ?? ''}
                {isBirthday(data.birthdate.toDate()) &&
                    <span>&nbsp;<CakeIcon className={'h-5 mb-1 inline text-stone-600'}/></span>}
              </span>

            </Typography>
            <Typography type="subtitle" text={data.profession ?? ''}
                        style={{weight: 'semibold', className: 'text-stone-700'}}/>
          </div>
        ) : <></>}
      </>)
    )}
  </DocumentResolver>;
}
