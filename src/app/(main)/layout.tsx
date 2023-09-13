import AppNav from "@/components/app-nav/AppNav";
import { AppNavItemConfig } from "@/components/app-nav/AppNavItemConfig";
import { DocumentIcon, HomeIcon, IdentificationIcon, InformationCircleIcon, Squares2X2Icon } from '@heroicons/react/20/solid';

type Props = {
  children: React.ReactNode;
}

const NAV_ITEMS: AppNavItemConfig[] = [
  // { destination: '/home', label: 'Home', icon: <HomeIcon className="h-5" /> },
  { destination: '/about', label: 'About', icon: <InformationCircleIcon className="h-4" /> },
  // { destination: '/projects', label: 'Projects', icon: <Squares2X2Icon className="h-5" /> },
  { destination: '/blog', label: 'Blog', icon: <DocumentIcon className="h-4" /> },
  { destination: '/card', label: 'Business Card', icon: <IdentificationIcon className="h-4" /> },
];

const MainLayout = ({ children }: Props) => {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-stone-900/80">
        <div className="bg-stone-900/60 backdrop-blur-md min-h-screen w-full md:w-10/12 lg:w-9/12 md:shadow-lg border-x border-x-white/10 py-10 mb-40 rounded-b-lg">
          {children}
        </div>
      </div>
      <div className="w-screen fixed bottom-0 left-0 grid place-items-center">
        <AppNav items={NAV_ITEMS} />
      </div>
    </>
  );

}

export default MainLayout;
