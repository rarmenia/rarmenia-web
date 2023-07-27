'use client'
import './globals.css'
import Image from 'next/image';
import { Karla, Merriweather, JetBrains_Mono } from 'next/font/google'
import { usePathname } from 'next/navigation';
import { DocumentIcon, HomeIcon, IdentificationIcon, InformationCircleIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import MenuItem from '@/components/interactive/MenuItem';

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
});
const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-merriweather',
});
const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jb-mono',
});

type Link = { link: string, text: string, icon: React.ReactNode }

const links: Link[] = [
  { link: '/home', text: 'Home', icon: <HomeIcon className="h-5" /> },
  { link: '/about', text: 'About', icon: <InformationCircleIcon className="h-5" /> },
  { link: '/projects', text: 'Projects', icon: <Squares2X2Icon className="h-5" /> },
  { link: '/blog', text: 'Blog', icon: <DocumentIcon className="h-5" /> },
  { link: '/card', text: 'Card', icon: <IdentificationIcon className="h-5" /> },
];


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  const filteredPaths = ['/'];

  return (
    <html lang="en">
      <body className={[karla.variable, merriweather.variable, jbMono.variable, 'font-sans'].join(' ')}>
        <div className="-z-30 w-screen h-screen fixed isolate bg-stone-950 font-sans">
          {
            /* 
              * TODO - Three JS  canvas, fill screen, canvas is a mesh Gradient
            */
          }
          <Image src="/mesh.png" alt="mesh gradient" objectFit='cover' fill={true} />
          <div className="absolute inset-0 bg-stone-950/50"></div>
        </div>
        <div className="z-0">{children}</div>
        {!filteredPaths.includes(pathname) && (
          <div className="fixed top-0 left-0 h-screen min-h-screen w-screen min-w-screen flex flex-col-reverse md:flex-row md:items-start">
            <div className="w-full h-32 rounded-t-md shadow-md md:w-2/12 md:h-full bg-stone-900/90 grid place-items-center gap-2">
              <div className="w-full flex flex-row items-center justify-center md:hidden">
                <div className="px-4 py-1 bg-sky-200 bg-opacity-10 rounded-md shadow text-sky-500 text-base font-mono tracking-tight">
                  {links.filter(l => pathname.startsWith(l.link))[0]?.text ?? '???'}
                </div>
              </div>
              <div className="py-2 md:py-4 px-4 rounded-md bg-stone-950/30 overflow-hidden flex flex-row md:flex-col items-center gap-8">
                <div className="text-white text-2xl font-sans font-semibold tracking-tighter">RA</div>
                <div className="flex flex-row items-center md:flex-col">
                  {links.map((link, ind) => {
                    const isActive = pathname.startsWith(link.link);
                    return <MenuItem destination={link.link} label={link.text} icon={link.icon} active={isActive} key={ind} />
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </body>
    </html>
  )
}
