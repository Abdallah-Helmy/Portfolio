import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Sidebar.css';
import logo from '../../profile.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pages, socaillinks } from './data';

function Sidebar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar className="navbar col-lg-1 h-100">
        <Container className="flex-lg-column h-100">
          <Link to="/Portfolio/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <Nav className="nav nav1 flex-lg-column align-items-center">
            {pages.map((page, index) => {
              const { name, icon } = page;
              return (
                <NavLink to={`/Portfolio/${name}`} key={index}>
                  <li>
                    <FontAwesomeIcon icon={icon} />
                  </li>
                </NavLink>
              );
            })}
          </Nav>

          <Nav className="nav flex-lg-column align-items-center">
            {socaillinks.map((item, index) => {
              const { link, icon } = item;
              return (
                <Nav.Link href={link} target="_blank" key={index}>
                  <li className="m-0">
                    <FontAwesomeIcon icon={icon} />
                  </li>
                </Nav.Link>
              );
            })}
          </Nav>
          <div className={Toggle ? 'menu-bar toggle-menu' : 'menu-bar'} onClick={() => setToggle(!Toggle)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${Toggle ? 'hidden-menu show' : 'hidden-menu'} w-75`}>
            <div className="togller-menu">
              <Nav className="nav1 flex-lg-column align-items-center">
                {pages.map((page, index) => {
                  const { name, icon } = page;
                  return (
                    <NavLink to={`/Portfolio/${name}`} key={index} onClick={() => setToggle(false)}>
                      <li>
                        <FontAwesomeIcon icon={icon} />
                      </li>
                    </NavLink>
                  );
                })}
              </Nav>

              <Nav className="align-items-center">
                {socaillinks.map((item, index) => {
                  const { link, icon } = item;
                  return (
                    <Nav.Link href={link} target="_blank" key={index}>
                      <li className="m-0">
                        <FontAwesomeIcon icon={icon} />
                      </li>
                    </Nav.Link>
                  );
                })}
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
