import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {AppState, wrapper} from '../redux/store';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';

function MyApp({Component, pageProps}: AppProps) {

  const layout = useSelector((state: AppState) => state.layout);

  const router = useRouter();

  return (<div className="flex flex-col h-full w-full min-h-full min-w-full">
    {layout.showHeader && (
      <div className="flex flex-row bg-orange-800 text-white w-screen h-12 items-center shadow-slate-300 shadow-sm">
        <h1 className="text-xl ml-3.5 cursor-pointer">
          <a onClick={() => router.push('/')} className={'decoration-0'}>Rei Armenia</a>
        </h1>
      </div>
    )}
    <Component {...pageProps} />
  </div>)
}

export default wrapper.withRedux(MyApp)
