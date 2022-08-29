import { NextPage } from "next";
import Game2048 from "./game/Game2048";

const Page2048: NextPage = () => {
  return (
    <>
      <Game2048 shape={4} />
    </>
  )
}

export default Page2048;