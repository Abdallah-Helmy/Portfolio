import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../Context/UseContext';
import './Loader.css';

function Loader({ home, about, works, contact }) {
  const loaderRef = useRef();
  const { setHomeshow, setAboutshow, setWorksshow, setcontactshow } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      if (home) {
        setHomeshow();
      } else if (about) {
        setAboutshow();
      } else if (works) {
        setWorksshow();
      } else if (contact) {
        setcontactshow();
      }
    }, 700);
  }, []);

  return (
    <div className="loader col-11 d-flex justify-content-center align-items-center" ref={loaderRef} id="test">
      <div className="load"></div>
    </div>
  );
}

export default Loader;
