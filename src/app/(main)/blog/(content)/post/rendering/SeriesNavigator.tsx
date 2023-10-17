import React from 'react'
import { SeriesInfo } from '../../../resolvers/BlogPostResolver';

type SeriesNavigatorProps = {
  navigation: SeriesInfo
}

const SeriesNavigator = ({ navigation }: SeriesNavigatorProps) => {

  return (
    <div className='min-w-[22rem] w-10/12 border border-white/10 p-4 bg-stone-900/80 rounded-b-lg'>SeriesNavigator</div>
  );
}

export default SeriesNavigator;
