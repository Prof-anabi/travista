import React, {useState} from 'react';
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';
import logo from '../assets/logo.png';

const Navbar = () => {

  const [navState, setNavState] = useState(false);
  return (
    <div>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <a href='/'><img src={logo} alt=''/>
            TraVista!</a>
          </div>
          <div className='toggle'>
            {
              navState ? (
              <VscChromeClose onClick={() => setNavState(false)}/> 
              ) : ( <GiHamburgerMenu onClick={() => setNavState(true)}/>
            )}
          </div>
        </div>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#recommend'>Places</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
        </ul>
        <button>Connect</button>
      </Nav>
      <ResponsiveNav state={navState}>
        <ul>
          <li><a href='#home' onClick={() => setNavState(false)}>Home</a></li>
          <li><a href='#services' onClick={() => setNavState(false)}>Services</a></li>
          <li><a href='#recommend' onClick={() => setNavState(false)}>Places</a></li>
          <li><a href='#testimonials' onClick={() => setNavState(false)}>Testimonials</a></li>
        </ul>
      </ResponsiveNav>
    </div>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
      a{
        text-decoration: none;
      }
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    li {
      a{
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: .1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type{
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
button {
  padding: .5rem 1rem;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
  color: white;
  background-color: #48cae4;
  text-transform: uppercase;
  font-size:  1.1rem;
  letter-spacing: .1rem;
  transition: .3s ease-in-out;
  &:hover{
    background-color: #023e8a;
  }
}

@media screen and (min-width: 280px) and (max-width: 1080px) {
  .brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .toggle {
      display: block
    }
  }
  ul, 
  button {
    display: none;
  }
}
`;
  
const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  background-color: white;
  width: 100%;
  height: 30vh;
  align-items: center;
  transition: .3s ease-in-out;
  top: ${({ state }) => (state ? '50px' : '-400px')};
  ul {
    list-style-type: none;
    width: 100%;
    li{
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: .1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        color: #023e8a;
        font-weight: 900;
      }
    }
  }
`;
export default Navbar;