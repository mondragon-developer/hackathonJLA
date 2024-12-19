import React from "react";
import styled from "styled-components";
import buildingImage from "../assets/jla-building.png";

const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #1e1e4c;
  color: white;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  position: relative; /* Set relative positioning for absolute children */
`;


const TextSection = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  padding: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    text-align: center;
  }

  a {
    color: #9f80ff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 50%; /* Restrict image to half the width of the screen */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-height: 50vh; /* Limit the height to 50% of the viewport */
    object-fit: cover; /* Maintain aspect ratio and crop as needed */
    border-radius: 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.5rem;

    &:hover {
      color: #9f80ff;
    }
  }
`;

const ButtonContainer = styled.div`
  position: absolute; /* Position it relative to the parent container */
  top: 1rem; /* Adjust distance from the top */
  left: 50%; /* Start positioning from center */
  transform: translateX(-50%); /* Center it horizontally */

  a {
    font-size: 1.5rem;
    background: white;
    color: #ed6842;
    padding: 0.4rem 1rem;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      background: #242051;
      color: white;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
      padding: 0.5rem 1.2rem;
    }
  }
`;

const AboutJLA = () => (
 
  <AboutWrapper>
   <ButtonContainer>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfgVi0S6Sw-xtTxd8BFq4WKW8LPLq_ZzZuxtgZimH_r1sSVfg/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Here
      </a>
  </ButtonContainer>
  
    <TextSection>
      <h2>About JLA</h2>
      <p>
        Built in 2022, the Jewish Leadership Academy is a world-class Jewish
        Middle and Upper School dedicated to developing the skills, curiosity,
        and potential of Miami’s most ambitious students for a life of purpose,
        commitment, and service.
      </p>
      <hr />
      <p>
        <a href="https://www.jlamiami.org">www.jlamiami.org</a>
      </p>
      <p>
        975 NW 95th Street, Miami FL, 33150
        <br />
        info@jlamiami.org | (305)-306-2660
      </p>
      <SocialIcons>
        <a
          href="https://www.facebook.com/thejewishleadershipacademy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/the-jewish-leadership-academy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/jlamiami/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </SocialIcons>
    </TextSection>
    <ImageSection>
      <img src={buildingImage} alt="JLA Building" />
    </ImageSection>
  </AboutWrapper>
);

export default AboutJLA;
