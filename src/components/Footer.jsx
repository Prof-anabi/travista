import React from 'react';
import styled from 'styled-components';
import { BsLinkedin, BsFacebook} from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <span>Copyright &copy; {year} TraVista! All rights reserved</span>
      <ul className='links'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#recommend'>Places</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
        </ul>
        <ul className='socialLinks'>
          <li><BsLinkedin /></li>
          <li><BsFacebook /></li>
          <li><AiFillInstagram /></li>
        </ul>
    </FooterContainer>
  )
}


const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d8d0ff;
  padding: 2.5rem;
  border-radius: .5rem;
  ul{
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li{
      a{
        text-decoration: none;
        color: black;
        transition: .3s ease-in-out;
        &:hover{
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: .3s ease-in-out;
        &:hover{
          color: #302ce9;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .socialLinks {
      flex-direction: row;
    }
  }
`;
export default Footer