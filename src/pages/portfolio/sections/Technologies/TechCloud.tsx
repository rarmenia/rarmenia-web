import React from 'react';
import WordCloudWrapper from '../../../../components/WordCloudWrapper';
import { ParentSize } from '@visx/responsive';
import { WordCloudTechData } from '../../../../data/TechSkills';

type Props = {
  onWordChosen?: (word: string) => void;
};

const TechCloud = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <ParentSize className="w-full h-full">
        {(parent) => (
          <WordCloudWrapper
            words={WordCloudTechData}
            scaleRange={[40, (parent.width ?? 1000) / 10]}
            width={parent.width}
            height={600}
            padding={4}
            spiralType={'archimedean'}
            colors={[
              '#FFFFFF',
              '#F7FDFF',
              '#F7F1FF',
              '#F7FFF5',
              '#F2FFF9',
              '#F2FEFF',
              '#F2FFF2',
            ]}
            onWordChosen={props.onWordChosen}
          />
        )}
      </ParentSize>
    </div>
  );
};

export default TechCloud;
