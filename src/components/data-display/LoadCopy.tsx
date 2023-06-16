import { allCopies } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

interface Props {
  target?: string;
}

const LoadCopy = (props: Props) => {

  const copy = allCopies.find(blurb => blurb.contentRef === props.target);
  if (!copy) return <></>;

  /*
    * While having a conditional hook is "against the rules" we only want to call this hook if the copy exists
    * As such we are gonna disable the line so the code works as intended.
   */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXContent = useMDXComponent(copy?.body.code);

  return <MDXContent />;

}

export default LoadCopy;