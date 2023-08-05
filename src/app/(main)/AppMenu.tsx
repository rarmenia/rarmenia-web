'use client'
import { usePathname } from "next/navigation";
import { DocumentIcon, HomeIcon, IdentificationIcon, InformationCircleIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import Menu from "@/components/interactive/Menu";
import { MenuItemConfig } from "@/components/interactive/MenuItem";

const LINKS: readonly MenuItemConfig[] = [
  { destination: '/home', label: 'Home', icon: <HomeIcon className="h-5" /> },
  { destination: '/about', label: 'About', icon: <InformationCircleIcon className="h-5" /> },
  { destination: '/projects', label: 'Projects', icon: <Squares2X2Icon className="h-5" /> },
  { destination: '/blog', label: 'Blog', icon: <DocumentIcon className="h-5" /> },
  { destination: '/card', label: 'Card', icon: <IdentificationIcon className="h-5" /> },
] as const;

const AppMenu = () => {

  const pathname = usePathname();

  return (
    <>
      <div className="w-auto bg-stone-900/70 backdrop-blur-md grid place-items-center gap-2 p-4 md:p-8 rounded-t-lg shadow-sm">
        <div className="flex flex-col items-center justfy-center gap-2">
          <div className="block md:hidden text-sky-500 px-2 rounded-md shadow bg-sky-200/10">{LINKS.filter(link => pathname.startsWith(link.destination))[0]?.label ?? '??'}</div>
          <div className="flex flex-row items-center gap-4 md:gap-8">
            <div className="text-white text-2xl font-sans font-semibold tracking-tighter">RA</div>
            <Menu menuItems={LINKS} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppMenu;

