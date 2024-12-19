import React from "react";
import styled from "styled-components";
import logo from "../assets/logoH.png";

const HeroWrapper = styled.div`
  background: #ed6942;
  color: white;
  text-align: center; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  padding: 1rem 1rem;

  @media (max-width: 480px) {
    padding: 1rem; /* Reduce padding on very small screens */
  }
`;

const Logo = styled.img`
  width: 40%;
  max-width: 800px;
  height: auto;

    @media (max-width: 768px) {
    width: 60%; /* Increase logo size for tablets */
  }

  @media (max-width: 480px) {
    width: 80%; /* Further reduce logo size on small devices */
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 0.8rem 2rem;
  background: #242051;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Slightly smaller for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Smaller font for mobile */
    padding: 0.5rem 1.5rem; /* Adjust padding */
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 0.8rem 2rem;
  background: #242051;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Smaller font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Small font for mobile */
    padding: 0.5rem 1.5rem; /* Reduce padding */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center buttons horizontally */
  gap: 1rem;

  a {
    font-size: 1.5rem;
    background: white;
    color: #ed6842;
    padding: 0.8rem 2rem;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      background: #242051;
      color: white;
    }
     
    @media (max-width: 480px) {
      font-size: 1.2rem; /* Reduce button font size */
      padding: 0.5rem 1.2rem; /* Smaller padding for mobile */
    }
  }
`;


const HeroSection = () => (
  <HeroWrapper>
    <Logo src={logo} alt="" />
    <HeroTitle>Hackathon 2025</HeroTitle>
    <Subtitle>Thursday, February 6th, 2025</Subtitle>

    <ButtonContainer>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfgVi0S6Sw-xtTxd8BFq4WKW8LPLq_ZzZuxtgZimH_r1sSVfg/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Here
      </a>
    </ButtonContainer>
  </HeroWrapper>
);

export default HeroSection;