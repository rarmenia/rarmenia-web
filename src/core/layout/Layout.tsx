import React from 'react';
import hamburger from '../../assets/icons/hamburger.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/app.store';
import {setSidebar} from '../redux/reducers/layout.reducer';
import {Outlet} from 'react-router-dom';

interface Props {
}

const Layout = (props: Props) => {

  const layout = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  return (
    <div className="h-screen min-h-screen w-screen min-w-screen flex flex-col">
      {layout.topbar &&
      <header
          className="flex flex-row items-center bg-gray-800 dark:bg-gray-900 text-gray-200 py-2 transition-all duration-100 ease-in-out">
          <div className="flex flex-row items-center my-2 ml-2.5">
              <button className="mx-2" onClick={() => dispatch(setSidebar(!layout.sidebar))}>
                  <img src={hamburger} alt="hamburger menu"
                       aria-label="toggles showing the nav sidebar" className="h-12 w-12 p-0.5"/>
              </button>
              <h1 className="text-lg font-light">Rei Armenia</h1>
          </div>
      </header>
      }
      <div className="flex flex-row flex-grow overflow-hidden">
        <nav aria-label="nav sidebar"
             className={'overflow-y-scroll bg-gray-200 text-gray-800 dark:bg-gray-500 dark:text-gray-200 transition-all duration-100 ease-in-out ' + (layout.sidebar ? 'w-full md:w-1/3 min-w-max' : 'w-0')}>
        </nav>
        <main aria-label="main content area"
              className="flex-grow bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 overflow-y-scroll p-5">
          <Outlet />
        </main>
      </div>
      {layout.footer &&
      <footer className="h-6">
      </footer>
      }
    </div>
  );
};

export default Layout
