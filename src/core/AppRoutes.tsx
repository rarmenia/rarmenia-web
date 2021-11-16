import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import Landing from '../modules/landing/Landing';

interface Props {
}

const AppRoutes = (props: Props) => {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes
