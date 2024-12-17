import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: #1e1e4c;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between; /* Ensures items are on opposite sides */
  align-items: center; /* Vertically centers items */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on smaller screens */
    text-align: center; /* Center-align content */
    gap: 1rem; /* Add spacing between items */
  }
`;

const Button = styled.a`
  background: #ed6842;
  color: white;
  padding: 0.8rem 2rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
  box-shadow: 0 4px 6px rgba(237, 105, 66, 0.5);

  &:hover {
    background: #d45a2e;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.5rem; /* Reduce padding on smaller screens */
    font-size: 0.9rem; /* Adjust font size */
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0; /* Ensures no extra spacing */
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);


  @media (max-width: 480px) {
    font-size: 1.5rem; /* Adjust logo font size */
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>JLA Hackathon 2025</Logo>
    <Button 
      href="https://buy.stripe.com/fZe5mlcmH5M64VidQQ" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      REGISTER HERE
    </Button>
  </HeaderWrapper>
);

export default Header;
