import React from "react";
import styled from "styled-components";
import picture1 from "../assets/picture_1.jpeg";
import picture2 from "../assets/picture_2.jpeg";
import Spline from "@splinetool/react-spline";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background: #f5f5f5;
  padding: 2rem 1rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
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
    background: #ed6842;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    width: 80%;
    font-weight: bold;

    &:hover {
      background: #d45a2e;
    }
  }
`;

const SplineWrapper = styled.div`
  width: 800px;
  height: 300px; /* Adjust to fit */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoCards = () => (
  <CardsWrapper>
    {/* First Card */}
    <Card>
      <img src={picture1} alt="Event Details" />
      <h3>Event Details & Registration</h3>
      <p>Join us for an exciting event full of innovation and creativity.</p>
      <a href="#details">Learn More</a>
    </Card>

    {/* 3D Model in the Middle */}
    <SplineWrapper>
    <Spline
        scene="https://prod.spline.design/4N4K6p4zMXyPmQ-a/scene.splinecode" 
        width={600}
        height={300}
      />
    </SplineWrapper>

    {/* Second Card */}
    <Card>
      <img src={picture2} alt="FAQs" />
      <h3>FAQs</h3>
      <p>Find answers to the most common questions about the Hackathon.</p>
      <a href="#faqs">Read FAQs</a>
    </Card>
  </CardsWrapper>
);

export default InfoCards;



