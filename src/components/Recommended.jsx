import React, { useState} from 'react';
import styled from 'styled-components';
import dest1 from '../assets/Destination1.png';
import dest2 from '../assets/Destination2.png';
import dest3 from '../assets/Destination3.png';
import dest4 from '../assets/Destination4.png';
import dest5 from '../assets/Destination5.png';
import dest6 from '../assets/Destination6.png';
import info1 from '../assets/info1.png';
import info2 from '../assets/info2.png';
import info3 from '../assets/info3.png';

const Recommended = () => {

  const data = [
    {
      image: dest1,
      title: "Singapore",
      subTitle: "Singapore, officially the republic of Singapore, ",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: dest2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. ",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: dest3,
      title: "Paris",
      subTitle: "Paris, France's capital is a major European city ",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: dest4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the ",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: dest5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island ",
      cost: "95,400",
      duration: "Approx 2 night and 2 day trip",
    },
    {
      image: dest6,
      title: "London",
      subTitle: "London, the capital of England ",
      cost: "38,800",
      duration: "Approx 3 night and 2 day trip",
    },
  ]

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel"
  ]

  const [active, setActive] = useState(1);
  return (
    <Section id='recommend'>
      <div className='title'>
        <h2>Recommended Destinations</h2>
      </div>
      <div className='packages'>
        <ul>
          {
            packages.map((pkg, index) => {
              return <li className={active === index + 1 ? "active" : ""} 
              onClick={() => setActive(index + 1)}
              key={index}
              >
              {pkg}
              </li>
            })
          }
        </ul>
      </div>
      <div className='destinations'>
          {
            data.map((item, index) => {
              return (
                <div className='destination' key={index}>
                  <img src={item.image} alt='Destination' />
                  <h3>{item.title}</h3>
                  <p>{item.subTitle}</p>
                  <div className='info'>
                    <div className='services'>
                      <img src={info1} alt='' />
                      <img src={info2} alt='' />
                      <img src={info3} alt='' />
                    </div>
                    <h4>{item.cost}</h4>
                  </div>
                  <div className='distance'>
                    <span>1000 kms</span>
                    <span>{item.duration}</span>
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
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: .1rem solid black;
        cursor: pointer;
        transition: .3s ease-in-out;
        &:hover {
          transform: scale(1.02)
        }
      }
      .active {
        border-bottom: .5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: .3s ease-in-out;
      &:hover{
        transform: translateX(.4rem) translateY(-1rem);
        box-shadow: rgba(0,0,0,.35) 0 5px 15px;
      }
      img {
        width: 100%
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .services {
          display: flex;
          gap: .3rem;
          img {
            width: 2rem;
            border-radius: 1rem;
            background-color: #4d2ddb84;
            padding: .2rem .4rem;
          }
        }
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul{
        li{
          padding: 0 .5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: .3rem;
        }
      }
    }
    .destinations{
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

export default Recommended