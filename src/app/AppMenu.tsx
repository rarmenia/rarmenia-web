'use client'
import { MenuItemConfig } from "@/types/menu-item-config";
import { usePathname } from "next/navigation";
import { DocumentIcon, HomeIcon, IdentificationIcon, InformationCircleIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import Menu from "@/components/interactive/Menu";

type AppMenuProps = {
  filteredPaths: string[];
}
const LINKS: readonly MenuItemConfig[] = [
  { destination: '/home', label: 'Home', icon: <HomeIcon className="h-5" /> },
  { destination: '/about', label: 'About', icon: <InformationCircleIcon className="h-5" /> },
  { destination: '/projects', label: 'Projects', icon: <Squares2X2Icon className="h-5" /> },
  { destination: '/blog', label: 'Blog', icon: <DocumentIcon className="h-5" /> },
  { destination: '/card', label: 'Card', icon: <IdentificationIcon className="h-5" /> },
] as const;

const AppMenu = (props: AppMenuProps) => {

  const pathname = usePathname();

  return (
    <>
      {!props.filteredPaths.includes(pathname) && (
        <div className="fixed top-0 left-0 min-h-screen min-w-screen h-screen w-screen flex flex-col-reverse md:block">
          <div className="w-full h-32 md:w-3/12 md:h-full bg-stone-900/90 grid place-items-center gap-2">
            <div className="flex flex-col items-center justfy-center gap-2">
              <div className="block md:hidden text-sky-500 px-2 rounded-md shadow bg-sky-200/10">{LINKS.filter(link => pathname.startsWith(link.destination))[0]?.label ?? '??'}</div>
              <div className="flex flex-row md:flex-col items-center gap-4">
                <div className="text-white text-2xl font-sans font-semibold tracking-tighter">RA</div>
                <Menu menuItems={LINKS} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppMenu;

