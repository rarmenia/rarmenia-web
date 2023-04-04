import { CakeIcon } from '@heroicons/react/24/outline';
import React from 'react'
import Me from '../../../../data/Me';


const PersonalContent = () => {

  const birthdate = new Date(Me.info.birthdate);
  const today = new Date();
  const age = Math.abs(new Date((Date.now() - birthdate.getTime())).getUTCFullYear() - 1970);
  const isTodayBirthday = (today.getMonth() === birthdate.getMonth()) && (today.getDate() === birthdate.getDate());

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='flex flex-col md:flex-row place-items-center gap-4 md:gap-16'>
        <div className='bg-amber-600 h-40 w-40 rounded-full md:mr-12'></div>
        <div className='flex flex-col place-items-center'>
          <div className='flex flex-row items-center justify-center gap-2'>
            <div className='text-xl'><span className='text-amber-600'>{Me.info.name.first}</span> {Me.info.name.last}</div>
            <div className='text-sm text-stone-600 mt-0.5 flex flex-row items-center justify-center gap-2'>
              <div>{age}</div>
              {isTodayBirthday && (
                <div title='Today is their birthday!'>
                  <CakeIcon className='h-4' />
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-col place-items-center'>
            <div className='text-sm'>{Me.info.location.state}, {Me.info.location.country}</div>
            <div className='text-xs text-stone-600'>{Me.info.location.region}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalContent
