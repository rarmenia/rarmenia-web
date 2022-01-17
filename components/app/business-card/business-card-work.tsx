import {DocumentReference} from 'firebase/firestore';
import {Job} from '../../../interfaces/job';
import {DocumentResolver} from '../../generics/firebase-resolvers';
import Typography from '../../generics/typography';

export default function BusinessCardWork(props: { showPosition?: boolean }): JSX.Element {

  return <DocumentResolver<{ currentJob: DocumentReference }> path={'about/work'}>
    {({data, loading, error}) => (data && !loading && !error) ?
      (<DocumentResolver<Job> path={data.currentJob.path ?? ''}>
        {({data, error}) =>
          (<>
            {(data && !error) ? (<div className={'flex flex-col items-center justify-center'}>
              {props.showPosition &&
                  <Typography type="paragraph" text={data.title ?? ''}
                              style={{weight: 'semibold', className: 'text-amber-700 text-sm'}}/>}
              <Typography type="paragraph" text={data.employer ?? ''}
                          style={{weight: 'semibold', className: 'text-stone-800 text-[1rem]'}}/>
              <Typography type="paragraph" text={data.division ?? ''}
                          style={{weight: 'light', className: 'text-stone-700 text-[.75rem]'}}/>
            </div>) : (<></>)}
          </>)
        }
      </DocumentResolver>)
      : (<></>)}
  </DocumentResolver>;

}
