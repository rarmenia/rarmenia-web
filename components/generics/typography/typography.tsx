import React from 'react';
import {TypographyTypes, Weights} from './types';
import {fontWeightMap, typeDefaultStyleMap, typeTagMap} from './class-maps';


interface TextProps {

  type: TypographyTypes;

  style?: {
    weight?: Weights;
    skipTypeStyle?: boolean;
    className?: string;
  };


  text: string;
}

interface ChildrenProps {

  type: TypographyTypes;

  style?: {
    weight?: Weights;
    skipTypeStyle?: boolean;
    className?: string;
  };

  children: React.ReactNode,
}

function buildTypographyClasses(props: TextProps | ChildrenProps): string[] {
  return [
    ...props.style?.skipTypeStyle ? [] : [typeDefaultStyleMap.get(props.type) ?? ''],
    ...props.style?.weight ? [fontWeightMap.get(props.style.weight) ?? ''] : [],
    ...props.style?.className ? [props.style.className] : [],
  ];
}

export default function Typography(props: TextProps | ChildrenProps): JSX.Element {

  const target = typeTagMap.get(props.type) ?? 'span';
  const Tag = `${target}` as keyof JSX.IntrinsicElements;


  return (<Tag className={buildTypographyClasses(props).join(' ')}>
    {'children' in props ? props.children : 'text' in props ? props.text : ''}
  </Tag>);
}

