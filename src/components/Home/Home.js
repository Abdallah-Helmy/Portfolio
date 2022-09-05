import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../Lettersanimation/AnimatedLetters';
import './Home.css';
import Loader from '../Loader/Loader';
import { useGlobalContext } from '../Context/UseContext';

function Home() {
  const [AllRights, setAllRights] = useState(false);
  const { homedLoader } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setAllRights(true);
      setTimeout(() => {
        setAllRights(false);
      }, 4000);
    }, 1000);
  }, []);

  const hi = ['H', 'i', ','];
  const name = ['I', "'", 'm', ' ', 'A', 'b', 'd', 'a', 'l', 'l', 'a', 'h', ' ', 'H', 'e', 'l', 'm', 'y', ','];
  const job = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  return homedLoader ? (
    <>
      <div className="title col-xl-5 col-lg-6 col-sm-9 ms-lg-5 d-flex justify-content-center flex-column ">
        <h1 id="one">
          <AnimatedLetters letters={hi} />
        </h1>
        <br />
        <h1 id="two">
          <AnimatedLetters letters={name} />
        </h1>
        <br />
        <h1 id="three">
          <AnimatedLetters letters={job} />
        </h1>
        <p className="my-4">Front End Developer | Javascript Expert | Freelancer</p>
        <Link to="/Portfolio/Contact">
          <div className="main-btn">Contact Me</div>
        </Link>
      </div>
      <div className="abreviation col-xl-5 col-lg-4 col-sm-3 ms-xl-5 d-flex align-items-center justify-content-end">
        <span>A</span>
        <span>H</span>
      </div>
      <div className={AllRights ? 'home-pop-up showMsg' : 'home-pop-up'}>
        all rights reserved <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
      </div>
    </>
  ) : (
    <Loader home="home" />
  );
}

export default Home;
