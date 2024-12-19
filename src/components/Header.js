import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"; // Adjusted import path

const HeaderWrapper = styled.div`
  background: #1e1e4c;
  color: white;
  padding: 1rem 1rem;
  display: flex;
  align-items: center; /* Vertically centers items */
  justify-content: center; /* Centers items horizontally */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on smaller screens */
    text-align: center; /* Center-align content */
    gap: 1rem; /* Add spacing between items */
  }
`;

const LogoImage = styled.img`
  height: 200px;
  width: auto; 
  margin: 0;

  @media (max-width: 480px) {
    height: 120px; /* Adjust size for smaller screens */
  }
`;

const Header = () => (
  <HeaderWrapper>
    <LogoImage src={logo} alt="Logo" />
  </HeaderWrapper>
);

export default Header;