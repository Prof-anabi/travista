import React from 'react';
import styled from 'styled-components';
import services1 from '../assets/service1.png';
import services2 from '../assets/service2.png';
import services3 from '../assets/service3.png';
import services4 from '../assets/service4.png';

const Services = () => {

  const data = [
    {
      icon: services1,
      title: "Get Best Prices",
      subTitle: "Pay through our application and save thousands and get amazing rewards."
    },
    {
      icon: services2,
      title: "Covid Safe",
      subTitle: "We have all the curated hotels with precautions for a covid safe environment."
    },
    {
      icon: services3,
      title: "Flexible Payment",
      subTitle: "Enjoy flexible payment through our app and get rewards on every payment"
    },
    {
      icon: services4,
      title: "Find The Best Near You",
      subTitle: "Find the best hotels and places to visit near you in a single click"
    },
  ]
  return (
    <Section id='services'>
      {
        data.map((service, index) => {
          return(
            <div className='service' key={index}>
              <div className='icon'>
                <img src={service.icon} alt='' />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          )
        })
      }
    </Section>
  )
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100,100,111,.2) 0 7px 29px 0;
    transition: .3s ease-in-out;
    &:hover {
      transform: translateX(.4rem) translateY(-1rem);
      box-shadow: rgba(0,0,0,.35) 0 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr)
  }
`;
export default Services;