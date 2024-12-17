import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: #1e1e4c;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center; /* Vertically centers items */
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on smaller screens */
    text-align: center; /* Center-align content */
    gap: 1rem; /* Add spacing between items */
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0; /* Ensures no extra spacing */

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Adjust logo font size */
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>Jewish Leadership Academy</Logo>
  </HeaderWrapper>
);

export default Header;
