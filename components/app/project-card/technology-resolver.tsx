import Typography from '../../generics/typography';

interface Props {
  technology: string;
}

const map: Map<string, string> = new Map<string, string>([]);

export default function TechnologyResolver(props: Props): JSX.Element {

  const path = map.get(props.technology);

  return (
    <>
      {path ? <></> :
        <Typography type={'text'} text={props.technology}
                    style={{weight: 'thin', className: 'text-sm text-stone-600'}}/>
      }
    </>
  );

}
