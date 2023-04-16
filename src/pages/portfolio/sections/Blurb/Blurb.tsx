import { useState } from "react";
import BlurbDecoration from "./BlurbDecoration";
import BlurbNarrative from "./BlurbNarrative";


const Blurb = () => {

  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <div className="w-screen grid place-items-center p-2">

      <button
        className="relative isolate text-white w-10/12 md:w-2/4 font-mono block text-left"
        onClick={() => setExpanded((cur) => !cur)}
      >
        <BlurbNarrative expanded={expanded} />
        <BlurbDecoration expanded={expanded} />
      </button >

    </div >
  );

}

export default Blurb;
