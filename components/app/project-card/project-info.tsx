import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { Project } from '../../../interfaces/project';
import Typography from '../../generics/typography';

interface Props {
  project: Project;
}

export default function ProjectInfo(props: Props): JSX.Element {
  return (
    <div>
      <div className={'flex flex-col text-left'}>
        <div className={'flex flex-col'}>
          <Typography type={'subheading-2'} text={props.project.name ?? ''}
            style={{ weight: 'semibold', className: 'text-[.925rem]' }} />
          {(props.project.timeframe?.start || props?.project?.timeframe?.end) && (
            <Typography type={'paragraph'} style={{ weight: 'thin', className: 'text-sm mt-[-.25rem] text-stone-700' }}>
              <span>{props.project.timeframe?.start?.toDate().toLocaleDateString() ?? '???'}</span>
              <span> - </span>
              <span>{props.project.timeframe?.end?.toDate().toLocaleDateString() ?? 'Ongoing'}</span>
            </Typography>
          )}
          {props.project.role && (
            <Typography type={'paragraph'} style={{ weight: 'semibold', className: 'text-[.85rem] text-stone-900' }}>
              <span>Role: </span>
              <span className={'text-amber-700'}>{props.project.role ?? ''}</span>
            </Typography>
          )}
          {(props.project.technologies?.length ?? 0) > 0 && (<div className={'flex-row flex gap-1 flex-wrap'}>
            {(props?.project?.technologies ?? []).map((tech, index) => {
              return (<div key={index}>
                <Typography type={'text'} text={tech} style={{ weight: 'thin', className: 'text-sm text-stone-600' }} />
                {(index + 1 < (props?.project?.technologies ?? []).length) && (
                  <span className="text-sm text-stone-600"> •</span>)}
              </div>);
            })}
          </div>)}
        </div>
        <div className={'flex flex-col mt-4'}>
          <Typography type={'paragraph'} style={{ weight: 'thin', className: 'text-[.9rem]' }}>
            {props.project.description}
          </Typography>
        </div>
        {(props?.project?.duties?.length ?? 0) > 0 && (<>
          <Disclosure defaultOpen={false}>
            {({ open }) => (
              <>
                <Disclosure.Button className={'pt-4 h-auto text-left'}>
                  <Typography type={'subheading'} style={{ weight: 'semibold', className: 'text-sm' }}>
                    <span>
                      <span>Project </span>
                      <span className={'text-amber-700'}>Duties</span>
                      <span>
                        {open ? <ChevronUpIcon className={'h-8 inline mb-[.125rem]'} /> :
                          <ChevronDownIcon className={'h-8 inline mb-[.125rem]'} />}
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
                      <ul className={'list-disc ml-4 text-[.925rem] text-stone-800 font-light'}>
                        {(props.project.duties ?? []).map((duty, index) => {
                          return (
                            <li key={index}><Typography type={'text'} text={duty} style={{ className: 'py-2' }} /></li>
                          );
                        })}
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </>
        )}

      </div>
    </div>
  );
}
