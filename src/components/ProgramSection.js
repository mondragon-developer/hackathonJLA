import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-hackathon_3.1.png";

const SectionWrapper = styled.div`
  background: #ffff;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: center;
  margin-top: 3rem;

  img {
    width: 150px; /* Adjust size if needed */
    height: auto;
    margin-bottom: 1rem;
  800}

  img {
    width: 150px;
    height: auto;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #1e1e4c;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #2c3e50; /* Darker blue tone for small text */
    margin-bottom: 1rem;
  }

  .important-text {
    color: #ed6842;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  min-width: 300px;
  background: #1e1e4c;
  color: white;
  border-radius: 10px;
  padding: 1rem;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.95rem;

      span {
        font-weight: bold;
        color: #ed6842;
      }

      &:hover {
        background: #fdd8c1; /* Lighter orange tone */
        color: #1e1e4c; /* Keep the text dark for contrast */
        transform: scale(1.02);
        transition: all 0.3s ease;
      }
    }
  }
`;

const ProgramSection = () => (
  <SectionWrapper>
    {/* Left Section */}
    <LeftSection>
      <img src={logo} alt="JLA Logo" className="logo" />
      <h2>Thursday, February 6th, 2025</h2>
      <p>
        The JLA Hackathon is an exciting event for innovative minds to come
        together, collaborate, and create impactful solutions.
      </p>
      <p>
        We are accepting registrations for all students interested in technology
        and innovation.
      </p>
      <p className="important-text">Registration closes on January 20th</p>
    </LeftSection>

    {/* Right Section */}
    <RightSection>
      <h3>PROGRAM</h3>
      <ul>
        <li>
          <span>8:30 AM:</span> Arrival
        </li>
        <li>
          <span>9:00 AM:</span> Everyone Goes to the "Beit Midrash"
        </li>
        <li>
          <span>9:00 AM - 9:15 AM:</span> Breakfast Carry-On
        </li>
        <li>
          <span>9:15 AM:</span> Instructions While Breakfast Finishes
        </li>
        <li>
          <span>9:30 AM:</span> Hackathon Starts
        </li>
        <li>
          <span>11:30 AM:</span> Lunch While You Code Begins
        </li>
        <li>
          <span>3:00 PM:</span> Hackathon Hard Stop
        </li>
        <li>
          <span>3:00 PM - 4:00 PM:</span> Judging
        </li>
        <li>
          <span>4:00 PM - 4:30 PM:</span> Awards Ceremony
        </li>
      </ul>
    </RightSection>
  </SectionWrapper>
);

export default ProgramSection;

