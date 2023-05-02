import React from 'react';

type Props = {
  words: (string | { word: string; style: string })[];
  animationStyle?: string;
  ignoredChars?: string[];
  center?: boolean;
};

const ZipperText = (props: Props) => {
  function resolveWord(ob: string | { word: string; style: string }): string {
    return typeof ob === 'string' ? ob : ob.word;
  }

  function resolveStyle(ob: string | { word: string; style: string }): string {
    return typeof ob === 'string' ? 'text-inherit' : ob.style;
  }

  function getAnimation(currWordInd: number, charInd: number): string {
    const ignored = props.ignoredChars ?? [];
    const currChar = resolveWord(props.words[currWordInd]).charAt(charInd);

    if (ignored.includes(currChar)) {
      return '';
    }

    const prevWords = props.words.slice(0, currWordInd);
    const prevCharCount = prevWords.reduce(
      (acc, cur) => acc + resolveWord(cur).length,
      0
    );
    const mod = ((prevCharCount > 0 ? 1 : 0) + prevCharCount + charInd) % 2;
    const animation = mod < 1 ? 'animate-fade-in-down' : 'animate-fade-in-up';
    return `${animation} ${props.animationStyle}`;
  }

  function resolveTextFull(): string {
    return props.words.map((_) => resolveWord(_)).join(' ');
  }

  const render = () => (
    <>
      <span
        className={`flex flex-row ${props.center ? 'items-center text-center justify-center' : ''
          }`}
      >
        {props.words.map((word, wind) => {
          return (
            <span
              key={wind}
              className={`flex flex-row ${resolveStyle(word)}`}
              aria-hidden='true'
            >
              {resolveWord(word)
                .split('')
                .map((char, cind) => {
                  return (
                    <span
                      key={cind}
                      className={getAnimation(wind, cind)}
                      aria-hidden='true'
                    >
                      {char}
                    </span>
                  );
                })}
              {wind + 1 < props.words.length && (
                <span aria-hidden='true'>&nbsp;</span>
              )}
            </span>
          );
        })}
      </span>
      <span className='sr-only'>{resolveTextFull()}</span>
    </>
  );

  return render();
};

export default ZipperText;
