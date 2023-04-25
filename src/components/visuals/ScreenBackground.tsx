import ContentPlacer from "@components/processors/ContentPlacer";
import ScreenSize from "@components/providers/ScreenSize";
import Image from 'next/image';

interface Props {
  aspectRatio: number;
  video?: string;
  img?: string;
}

const ScreenBackground = (props: Props) => {
  return (
    <ScreenSize>
      {(dim) => (
        <ContentPlacer space={dim} aspect={props.aspectRatio ?? (16 / 9)}>
          {(dimOff) => (
            <>
              {props.video && <object data={props.video} className="absolute" style={
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
      )}
    </ScreenSize>
  )
}

export default ScreenBackground
