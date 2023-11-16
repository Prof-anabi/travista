import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/tt1.jpeg';
import image2 from '../assets/tt2.jpg';
import image3 from '../assets/tt3.jpg';

const Testimonial = () => {
  const data = [
    {
      name: 'Kishan Sheth',
      title: 'CEO - Mora Web Solutions',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rerum velit deserunt.',
      image: image1
    },
    {
      name: 'Mavis Forson',
      title: 'Manager - Digital Vitals',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rerum velit deserunt.',
      image: image2
    },
    {
      name: 'Billy Daniel',
      title: 'Entrepreneur and Author',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rerum velit deserunt.',
      image: image3
    },
  ]
  return (
    <Section id='testimonials'>
      <div className='title'>
        <h2>Happy Customers</h2>
      </div>
      <div className='testimonials'>
        {
          data.map((item, index) => {
            return (
              <div className='testimonial' key={index}>
                <p>{item.text}</p>
                <div className='info'>
                  <img src={item.image} alt='' />
                  <div className='details'>
                    <h4>{item.name}</h4>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: .5rem;
      box-shadow: rgba(100,100,111,.2) 0 7px 29px 0;
      transition: .3s ease-in-out;
      &:hover {
        transform: translateX(.4rem) translateY(-1rem);
        box-shadow: rgba(0,0,0,.35) 0 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        img {
          height: 3rem;
          border-radius: 50%;
        }
        .details {
          span {
            font-size: .9rem;
          }
          
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

export default Testimonial;