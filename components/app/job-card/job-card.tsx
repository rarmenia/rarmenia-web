import {Job} from '../../../interfaces/job';
import Card from '../../generics/card';
import Typography from '../../generics/typography';
import {ProjectInfo} from '../project-card';

import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/solid';

import {Disclosure, Transition} from '@headlessui/react';

interface Props {
  job: Job;
}

export default function JobCard(props: Props): JSX.Element {


  return <Card className={'md:rounded-[.45rem] p-4 text-center transition-all ease-in'}>
    <div className={'flex flex-col items-center justify-center'}>
      <div className={'flex flex-col items-center justify-center'}>
        <Typography type={'heading'}>
          <Typography type={'text'} style={{weight: 'semibold', className: 'text-amber-700'}}
                      text={props.job.title}/>
          <Typography type={'paragraph'} style={{weight: 'thin', className: 'text-stone-700 text-sm'}}>
        <span>
          <span>
            {props.job.employer}
          </span>
          {props.job.division && (
            <span>
              <span> - </span>
              <span>{props.job.division}</span>
            </span>
          )
          }
        </span>
          </Typography>
          <Typography type={'paragraph'} style={{weight: 'normal'}} text={props.job.team}/>
        </Typography>
        <Typography type={'paragraph'} style={{className: 'text-stone-600 text-sm'}}>
        <span>
          <span>{props.job.employment.start.toDate().toLocaleDateString()}</span>
          <span> to </span>
          <span>{props.job.employment.end?.toDate().toLocaleDateString() ?? 'Today'}</span>
        </span>
        </Typography>
      </div>
      <div className={'flex flex-row items-center justify-center mt-4'}>
        <Typography type={'paragraph'} style={{weight: 'thin', className: 'text-sm'}}>
          {props.job.blurb}
        </Typography>
      </div>
      <div className={'flex flex-col items-center justify-center mt-4'}>

        <Disclosure defaultOpen={true}>
          {({open}) => (
            <>
              <Disclosure.Button className={'py-4 h-auto'}>
                <Typography type={'subheading'} style={{weight: 'semibold', className: 'text-xl'}}>
                  <span>
                    <span>Notable </span>
                    <span className={'text-amber-700'}>Projects</span>
                    <span>
                      {open ? <ChevronUpIcon className={'h-8 inline mb-[.125rem]'}/> :
                        <ChevronDownIcon className={'h-8 inline mb-[.125rem]'}/>}
                    </span>
                  </span>
                </Typography>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel>
                  <div className={'flex flex-col items-start justify-start md:ml-8'}>
                    {(props.job.projects ?? []).map((project, index) => {
                      return (
                        <div key={index}
                             className={'flex flex-row align-start justify-start pb-8 my-5 border-l-2 border-amber-600 pl-8 border-dashed'}>
                          <ProjectInfo project={project}/>
                        </div>
                      );
                    }).reverse()
                    }
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

      </div>
    </div>
  </Card>;
}
