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
  padding: 3rem 1rem;
`;

const Logo = styled.img`
  width: 80%;
  max-width: 800px;
  height: auto;
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 0.8rem 2rem;
`;

const Subtitle = styled.p`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  padding: 0.8rem 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center buttons horizontally */
  gap: 1rem;

  a {
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
  }
`;


const HeroSection = () => (
  <HeroWrapper>
    <Logo src={logo} alt="" />
    <HeroTitle>JLA Hackathon</HeroTitle>
    <Subtitle>Thursday, February 6th, 2025</Subtitle>

    <ButtonContainer>
      <a
        href="https://buy.stripe.com/fZe5mlcmH5M64VidQQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register
      </a>
      <a href="#learn-more">Learn More</a>
    </ButtonContainer>
  </HeroWrapper>
);

export default HeroSection;