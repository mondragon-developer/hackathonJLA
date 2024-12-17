import React from "react";
import styled from "styled-components";
import picture1 from "../assets/picture_1.jpeg";
import picture2 from "../assets/picture_2.jpeg";
import Spline from "@splinetool/react-spline";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #f5f5f5;
  padding: 1rem 1rem;
  
  @media (max-width: 768px) { /* Tablets and smaller screens */
      flex-direction: column;
      gap: 1rem; /* Reduce gap */
      padding: 1rem; /* Smaller padding */
    }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: white;
  border-radius: 10px;
  width: 300px;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  text-align: center;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    color: #1e1e4c;
    margin: 1rem 0;
  }

  p {
    padding: 0 1rem;
    color: #6c757d;
  }

  a {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    background: #ed6942;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    width: 80%;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      background: #242051;
    }
  }

  @media (max-width: 768px) { /* Tablets and smaller screens */
    width: 100%; /* Full width for smaller screens */
  }
`;

const SplineWrapper = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) { /* Tablets and smaller screens */
    width: 100%; /* Full width */
    height: 200px; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) { /* Phones */
    height: 150px; /* Smaller height */
  }
`;

const InfoCards = () => (
  <CardsWrapper>
    {/* First Card */}
    <Card>
      <img src={picture1} alt="Event Details" />
      <h3>Event Details & Registration</h3>
      <p>Join us for an exciting event full of innovation and creativity.</p>
      <a href="#info">Learn More</a>
    </Card>

    {/* 3D Model in the Middle */}
    <SplineWrapper>
    <Spline
        scene="https://prod.spline.design/tC4-NRVQLOwDUiWn/scene.splinecode" 
        />
    </SplineWrapper>

    {/* Second Card */}
    <Card>
      <img src={picture2} alt="FAQs" />
      <h3>FAQs</h3>
      <p>Find answers to the most common questions about the Hackathon.</p>
      <a href="#FAQs">Read FAQs</a>
    </Card>
  </CardsWrapper>
);

export default InfoCards;