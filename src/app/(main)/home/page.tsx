import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

const Home = () => {
  // TODO : remove redirect when code is complete;
  redirect('/about', RedirectType.replace);
  return (
    <div className="">
      Home
    </div>
  )
};

export default Home;
