import {DocumentReference} from 'firebase/firestore';
import {Job} from '../../../interfaces/job';
import DocumentResolver from '../../generics/document-resolver';
import Typography from '../../generics/typography';

export default function BusinessCardWork(): JSX.Element {

  return <DocumentResolver<{ currentJob: DocumentReference }> path={'about/work'}>
    {({data, loading, error}) => (data && !loading && !error) ?
      (<DocumentResolver<Job> path={data.currentJob.path ?? ''}>
        {({data, error}) =>
          (<>
            {(data && !error) ? (<div className={'flex flex-col items-center justify-center'}>
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
