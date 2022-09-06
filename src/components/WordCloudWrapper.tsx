import React, { useState } from 'react';
import { scaleLog } from '@visx/scale';
import { Wordcloud } from '@visx/wordcloud';
import { Text } from '@visx/text';

type WordData = {
  text: string;
  value: number;
};

type Props = {
  words: string | string[] | WordData[];
  scaleRange: [number, number];
  spiralType: 'rectangular' | 'archimedean';
  height: number;
  width: number;
  font?: string;
  doRotation?: boolean;
  colors?: string[];
  padding?: number;
  onWordChosen?: (word: string) => void;
  random?: () => number;
};

const WordCloudWrapper = (props: Props) => {
  const getFreq = (words: string[]) => {
    const freq: Record<string, number> = {};
    for (const w of words) {
      if (!freq[w]) freq[w] = 0;
      freq[w] += 1;
    }
    return Object.entries(freq).reduce(
      (acc: WordData[], [text, value]) => [...acc, { text, value }],
      []
    );
  };

  const resolvePropWords = (): WordData[] => {
    if (Array.isArray(props.words)) {
      if (props.words.length > 0) {
        if (typeof props.words[0] === 'string') {
          return getFreq(props.words as string[]);
        } else {
          return props.words as WordData[];
        }
      }
    } else {
      return getFreq(props.words.split(' '));
    }
    return [];
  };

  const words = resolvePropWords();

  const fontScale = scaleLog({
    domain: [
      Math.min(...words.map((word) => word.value)),
      Math.max(...words.map((word) => word.value)),
    ],
    range: props.scaleRange,
  });

  const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

  const randomRotation = () => {
    const rand = Math.random();
    const deg = rand > 0.5 ? 60 : -60;
    return rand * deg;
  };

  const rotation = props.doRotation ? randomRotation : 0;
  const colors =
    props.colors && props.colors.length > 0 ? props.colors : ['inherit'];

  const handleSelect = (word: string | undefined) => {
    if (props.onWordChosen && word !== undefined) {
      props.onWordChosen(word);
    }
  };

  const render = () => (
    <Wordcloud
      words={words}
      width={props.width}
      height={props.height}
      fontSize={fontSizeSetter}
      rotate={rotation}
      spiral={props.spiralType}
      padding={props.padding}
      random={props.random}
    >
      {(cloudWords) =>
        cloudWords.map((word, index) => (
          <Text
            key={word.text}
            fill={colors[index % colors.length]}
            textAnchor="middle"
            transform={`translate(${word.x}, ${word.y}) rotate(${word.rotate})`}
            fontSize={word.size}
            fontFamily={word.font}
            onClick={() => handleSelect(word.text)}
            className={props.onWordChosen ? 'cursor-pointer' : ''}
          >
            {word.text}
          </Text>
        ))
      }
    </Wordcloud>
  );

  return render();
};

export default WordCloudWrapper;
