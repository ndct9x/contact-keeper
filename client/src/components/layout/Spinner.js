import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <>
      <img
        scr='./spinner.gif'
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </>
  );
};
export default Spinner;
