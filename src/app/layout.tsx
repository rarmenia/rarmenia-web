import './globals.css'
import Image from 'next/image';
import { Karla, Merriweather, JetBrains_Mono } from 'next/font/google'
import AppMenu from './AppMenu';

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




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


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
        <AppMenu filteredPaths={['/']} />
      </body>
    </html>
  )
}
