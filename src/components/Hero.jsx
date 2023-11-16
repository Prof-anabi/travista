import React from 'react';
import styled from 'styled-components';
import homeImage from '../assets/hero.png';

const Hero = () => {
  return (
    <Section id='home'>
      <div className='background'>
        <img src={homeImage} alt='' />
      </div>
      <div className='content'>
        <div className='title'>
          <h1>TRAVEL TO EXPLORE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam asperiores vel deserunt mollitia nesciunt beatae eum autem laudantium repellat?</p>
        </div>
        <div className='search'>
          <div className='container'>
            <label htmlFor='searchbox'>Where do you want to go?</label>
            <input type='text' id='searchbox' placeholder='Search your location' />
          </div>
          <div className='container'>
            <label htmlFor='check-in'>Check-in</label>
            <input type='date' id='check-in' />
          </div>
          <div className='container'>
            <label htmlFor='check-out'>Check-out</label>
            <input type='date' id='check-out' />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .title {
    color: white;
    h1 {
      font-size: 3rem;
      letter-spacing: .2rem;
    }
    p {
      text-align: center;
      padding: 0 30vw;
      margin-top: .5rem;
      font-size: 1.2rem;
    }
  }
  .search {
    display: flex;
    background-color: #ffffffce;
    padding: .5rem;
    border-radius: .5rem;
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 1.5rem;
      label {
        font-size: 1.1rem;
        color: #03045e;
      }
      input {
        background-color: transparent;
        border: none;
        text-align: center;
        color: black;
        &[type="date"] {
          padding-left: 2rem;
        }
        &::placeholder{
          color: black;
        }
        &:focus {
          outline: none;
        }
      }
    }
    button {
      padding: 1rem;
      cursor: pointer;
      border-radius: .3rem;
      border: none;
      color: white;
      background-color: #4361ee;
      font-size: 1.1rem;
      text-transform: uppercase;
      transition: .3s ease-in-out;
      &:hover {
        background-color: #023e8a;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: .8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: .8rem;
        gap: .8rem;
        .container {
          padding: 0 .8rem;
          input[type='date'] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Hero;