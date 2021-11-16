import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setLayout} from '../../core/redux/reducers/layout.reducer';

interface Props {
}

const Landing = (props: Props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLayout({topbar: false, sidebar: false, footer: false}))
  }, [dispatch])

  return (
    <div>
      landing works!
    </div>
  );
};

export default Landing;
