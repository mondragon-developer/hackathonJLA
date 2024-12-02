import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-hackathon_3.1.png";

const HeroWrapper = styled.div`
  background: #ed6842;
  color: white;
  text-align: center;
  padding: 3rem 1rem;
`;

const Logo = styled.img`
  width: 500px; /* Adjust size as needed */
  height: auto;
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    background: white;
    color: #ed6842;
    padding: 0.8rem 2rem;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      background: #d45a2e;
      color: white;
    }
  }
`;

const HeroSection = () => (
  <HeroWrapper>
    <Logo src={logo} alt="jla hackathon 2025" />
    <HeroTitle></HeroTitle>
    <Subtitle>Thursday, February 6th, 2025</Subtitle>
    
    <ButtonContainer>
      <a href="https://buy.stripe.com/fZe5mlcmH5M64VidQQ" 
      target="_blank" 
      rel="noopener noreferrer"
      >Register</a>
      <a href="#learn-more">Learn More</a>
    </ButtonContainer>
  </HeroWrapper>
);

export default HeroSection;

