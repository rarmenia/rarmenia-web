import React from 'react'

type Props = {
  words: (string | { word: string, style: string })[];
  animationStyle?: string;
  ignoredChars?: string[];
  center?: boolean;
}



const ZipperText = (props: Props) => {

  function resolveWord(ob: string | { word: string, style: string }): string {
    return typeof ob === 'string' ? ob : ob.word;
  }

  function resolveStyle(ob: string | { word: string, style: string }): string {
    return typeof ob === 'string' ? 'text-inherit' : ob.style;
  }

  function getAnimation(currWordInd: number, charInd: number): string {

    const ignored = props.ignoredChars ?? [];
    const currChar = resolveWord(props.words[currWordInd]).charAt(charInd);

    if (ignored.includes(currChar)) {
      return '';
    }

    const prevWords = props.words.slice(0, currWordInd);
    const prevCharCount = prevWords.reduce((acc, cur) => acc + resolveWord(cur).length, 0);
    const mod = ((prevCharCount > 0 ? 1 : 0) + prevCharCount + charInd) % 2;
    const animation = mod < 1 ? 'animate-fade-in-down' : 'animate-fade-in-up';
    return `${animation} ${props.animationStyle}`

  }

  function resolveTextFull(): string {
    return props.words.map(_ => resolveWord(_)).join(' ');
  }

  return (
    <span className={`flex flex-row ${props.center ? 'items-center text-center justify-center' : ''}`} aria-label={resolveTextFull()}>
      {
        props.words.map((word, wind) => {
          return (
            <span key={wind} className={`flex flex-row ${resolveStyle(word)}`}>
              {resolveWord(word).split('').map((char, cind) => {
                return (
                  <span key={cind} className={getAnimation(wind, cind)}>
                    {char}
                  </span>
                );
              })}
              {wind + 1 < props.words.length && (<span>&nbsp;</span>)}
            </span>
          );
        })
      }
    </span>
  )
  // return (
  //   <span>
  //     {
  //       props.words.map((word, ind, arr) =>
  //         (
  //         <span key={ind} className={resolveStyle(word)}>
  //           {[...resolveWord(word).split('')].map((char, cind) => (
  //             <span key={cind} className='>{char}</span>
  //           ))} {ind + 1 < arr.length && (<span>&nbsp;</span>)}
  //         </span>
  //         )
  //       )
  //     }
  //   </span>
  // )
}

export default ZipperText