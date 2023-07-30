import Greeting from "./Greeting";

const About = () => {

  return (
    <div className="w-full overflow-hidden flex flex-col items-center md:items-end min-h-screen max-h-screen">
      <div className="w-full md:w-9/12 min-h-screen flex flex-col overflow-auto bg-stone-800/90 mb-28 py-8 gap-8">
        <Greeting />
      </div>
    </div>
  );

}

export default About;