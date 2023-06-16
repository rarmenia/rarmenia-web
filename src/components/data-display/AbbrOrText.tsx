import { useState } from "react";

interface Props {
  data?: [string] | [string, string];
  hideLoading?: boolean
}

const AbbrOrText = (props: Props) => {

  const [expanded, setExpanded] = useState<boolean>(false);

  const data = props.data ?? ['...', '...']

  const content = data[0]
  const full = data[1] ?? undefined


  return (
    <>
      {(props.data || (!props.data && !props.hideLoading)) && (
        <>
          {full ? <button onClick={() => setExpanded(c => !c)} ><abbr title={full}>{expanded ? full : content}</abbr></button> : <span>{content}</span>}
        </>
      )}
    </>
  );

}

export default AbbrOrText;