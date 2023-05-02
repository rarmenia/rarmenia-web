import ContentPlacer from '@components/ContentPlacer';
import useScreenSize from '@hooks/useScreenSize';
import Image from 'next/image';
interface Props {
  aspectRatio: number;
  video?: string;
  img?: string;
}

const ScreenBackground = (props: Props) => {

  const { width, height } = useScreenSize();

  return (
    <ContentPlacer space={{ width, height }} aspect={props.aspectRatio ?? (16 / 9)}>
      {(dimOff) => (
        <>
          {props.video && <object data={props.video} className='absolute' style={
            {
              ...dimOff,
              minHeight: dimOff.height,
              minWidth: dimOff.width
            }
          } />
          }
          {props.img &&
            <>
              <Image
                src={props.img}
                alt='content image'
                width={1920}
                height={1080}
                style={{
                  ...dimOff,
                  minHeight: dimOff.height,
                  minWidth: dimOff.width
                }}
              />
            </>
          }
        </>
      )}
    </ContentPlacer>
  )
}

export default ScreenBackground
