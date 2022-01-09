import React from 'react';
import {TypographyTypes, Weights} from './types';
import {RequireOnlyOne} from '../../utils/interface';
import {fontWeightMap, typeDefaultStyleMap, typeTagMap} from './class-maps';


interface PropsIntermediate {

  type: TypographyTypes;

  style?: {
    weight?: Weights;
    skipTypeStyle?: boolean;
    className?: string;
  };

  //Can have 'text' or 'children' not both.
  text?: string;
  children?: React.ReactNode;
}

type Props = RequireOnlyOne<PropsIntermediate, 'text' | 'children'>;

function buildTypographyClasses(props: Props): string[] {
  return [
    ...props.style?.skipTypeStyle ? [] : [typeDefaultStyleMap.get(props.type) ?? ''],
    ...props.style?.weight ? [fontWeightMap.get(props.style.weight) ?? ''] : [],
    ...props.style?.className ? [props.style.className] : [],
  ];
}

export function Typography(props: Props): JSX.Element {

  const target = typeTagMap.get(props.type) ?? 'span';
  const Tag = `${target}` as keyof JSX.IntrinsicElements;

  return (<Tag className={buildTypographyClasses(props).join(' ')}>
    {props.children ? props.children : props.text ? props.text : ''}
  </Tag>)
}

