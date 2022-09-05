import React, { useState, useEffect } from 'react';
import './Works.css';
import Projects from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Loader/Loader';
import { useGlobalContext } from '../Context/UseContext';

function Works() {
  const [Show, setShow] = useState(false);
  const { worksdLoader } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }, 1000);
  }, []);

  return worksdLoader ? (
    <>
      <div className="works col-11">
        {Projects.map((project, index) => {
          const { name, img, liveDemo, githubLink } = project;
          return (
            <div className="card col-xl-4" key={index}>
              <img src={img} alt={name} />
              <div className="demo">
                <a href={liveDemo} target={`_blank`}>
                  <button className="main-btn">live demo</button>
                </a>
                <a href={githubLink} target={`_blank`}>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          );
        })}

        <div className={Show ? 'pop-up show' : 'pop-up'}>see more projects in my github</div>
      </div>
    </>
  ) : (
    <Loader works="works" />
  );
}

export default Works;
