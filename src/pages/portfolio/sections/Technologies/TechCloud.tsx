import { Wordcloud } from '@visx/visx';
import React, { Dispatch, SetStateAction } from 'react'
import TechSkills from '../../../../data/TechSkills'

type Props = {
  handleSelect: Dispatch<SetStateAction<string | null>>;
}

const TechCloud = (props: Props) => {
  return (
    <div>Tech Cloud</div>
  )
}

export default TechCloud