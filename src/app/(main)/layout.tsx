import AppMenu from "./AppMenu";

type Props = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col items-center bg-stone-900/80">
        <div className="bg-stone-900/60 backdrop-blur-md min-h-screen w-full md:w-10/12 lg:w-9/12 md:shadow-md border-x border-x-white/10">
          {children}
        </div>
      </div>
      <div className="w-screen fixed bottom-0 left-0 grid place-items-center">
        <AppMenu />
      </div>
    </>
  );

}

export default MainLayout;
