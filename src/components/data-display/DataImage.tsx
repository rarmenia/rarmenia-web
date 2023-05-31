/* eslint-disable jsx-a11y/alt-text */
import { ImageInfo } from "@models/image-info";
import Image from "next/image";

interface Props {
  image?: ImageInfo;
  className?: string;
}

const DataImage = (props: Props) => {

  return (
    <>
      {
        props.image && (
          <>
            <Image {...props.image} className={props.className ?? ''} />
          </>
        )
      }
    </>
  )

}

export default DataImage;