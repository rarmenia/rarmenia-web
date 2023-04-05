import ContentPlacer from "components/processors/ContentPlacer"
import ScreenSize from "components/providers/ScreenSize"

interface Props {
  aspectRatio: number;
  src: string;
}

const ScreenBackground = (props: Props) => {
  return (
    <ScreenSize>
      {(dim) => (
        <ContentPlacer space={dim} aspect={props.aspectRatio ?? (16 / 9)}>
          {(dimOff) => (
            <>
              <object data={props.src} className="fixed z-[-999]" style={
                {
                  ...dimOff,
                  minHeight: dimOff.height,
                  minWidth: dimOff.width
                }
              } />
            </>
          )}
        </ContentPlacer>
      )}
    </ScreenSize>
  )
}

export default ScreenBackground
