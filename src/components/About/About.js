import React from 'react';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../Lettersanimation/AnimatedLetters';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../Loader/Loader';
import { useGlobalContext } from '../Context/UseContext';

function About() {
  const text = [...'About'];
  const { aboutdLoader } = useGlobalContext();
  return aboutdLoader ? (
    <>
      <div className="about-me col-lg-8 col-md-11 ms-lg-4 d-flex align-items-center">
        <div className="text">
          <h1 className="header" id="one">
            <AnimatedLetters letters={text} />
          </h1>
          <h1 className="text1">
            I'm a very ambitious front-end developer, <br /> i have the ability to work with the latest <br /> technologies on challenging and diverse projects.
          </h1>
          <br />
          <h1 className="text2">
            My Skills [ HTML, CSS, JS, BOOTSTRAP, REACT JS ], <br />
            if you interested of my Skills, please get in touch.
          </h1>
          <br />
        </div>
      </div>

      <div className="about-skills col-3 h-100 d-flex align-items-center animated-show">
        <div className="cubespinner h-25">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faBootstrap} color="#EC4D28" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loader about="about" />
  );
}

export default About;
