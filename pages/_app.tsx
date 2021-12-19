import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AppState, wrapper} from '../redux/store';
import {useSelector} from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {

  const layout = useSelector((state: AppState) => state.layout)

  return (<div className="flex flex-col h-full w-screen">
    {layout.showHeader && (<div className="flex flex-row bg-orange-800 text-amber-100 w-screen h-12 items-center shadow-slate-300 shadow-sm">
      <h1 className="text-xl ml-3.5">Rei Armenia</h1>
    </div>)}
    <Component {...pageProps} />
  </div>)
}

export default wrapper.withRedux(MyApp)
