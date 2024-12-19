import React from "react";
import styled from "styled-components";
import logo from "../assets/logoH.png";
import MyMapIframe from "./googlemaps";
import CopyText from "./copytext";

const SectionWrapper = styled.div`
  background: #ffff;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically on small screens */
    padding: 1rem; /* Reduce padding */
    gap: 1rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: center;
  margin-top: 3rem;

  img {
    width: 200px; 
    height: auto;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      width: 150px; /* Smaller logo on very small screens */
    }
  }

  h2 {
    font-size: 1.8rem;
    color: #1e1e4c;
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
      font-size: 1.5rem; /* Reduce heading size */
    }
  }

  p {
    text-align: center;
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
  position: sticky;
  top: 1rem;
  flex: 0.7;
  background: #4353A4;;
  color: white;
  border-radius: 10px;
  padding: 1rem;

 h3 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.95rem;

      @media (max-width: 480px) {
        font-size: 0.85rem; /* Smaller font for list items */
        flex-direction: column; /* Stack time and event details vertically */
        align-items: center;
        text-align: center;
      }

      span {
        font-weight: bold;
        color: #F5C04F;
      }

      &:hover {
        background: #19B361; /* Lighter orange tone */
        color: #1e1e4c; /* Keep the text dark for contrast */
        transform: scale(1.02);
        transition: all 0.3s ease;
      }
    }
  }

  @media (max-width: 768px) {
    position: static; /* Remove sticky positioning for mobile */
  }
`;

const ProgramSection = () => {
  const address = "975 NW 95th Street, Miami, FL 33150";

  return (
    <SectionWrapper id="info">
      {/* Left Section */}
      <LeftSection>
        <img src={logo} alt="JLA Logo" className="logo" />
        <h1>Hackathon 2025</h1>
        <h2>Thursday, February 6th, 2025</h2>
        <p>
          The JLA Hackathon is an exciting event for innovative minds to come
          together, collaborate, and create impactful solutions.
        </p>
        <p>
          We are accepting registrations for all high school students interested in technology
          and innovation. There are limited spots available!
        </p>
        <p className="important-text">Registration closes on January 23rd or once capacity has been reached.</p>
        
        <p>
        Any school with students in 8th grade and above is eligible to participate with teams of no more than four students per team ($50 per team). Additionally, each team/school must be accompanied by a chaperone for the entire duration of the activity.
        </p>
        <p>
        Participants must have some experience with any programming language (e.g., Python, C#, Java, JavaScript, HTML/CSS...).      </p>
        <p>
        The Hackathon is taking place at the Jewish Leadership Academy located at: <strong><CopyText textToCopy={address} />  Phone Number: 305-306-2660</strong>
        </p>
        <div>
        <MyMapIframe />  
        </div>
        
      </LeftSection>

      {/* Right Section */}
      <RightSection >
        <h3>PROGRAM</h3>
        <ul>
          <li>
            <span>8:30 - 9:00 am:</span> Check In and Registration
          </li>
          <li>
            <span>9:00 - 9:15 am</span> Grab & Go Breakfast
          </li>
          <li>
            <span>9:15 - 9:30 am:</span> Welcome & Instructions
          </li>
          <li>
            <span>9:30 - 3:00 pm:</span> Hackathon
          </li>
          <li>
            <span>11:30 - 1:00 pm:</span> Lunch While You Code
          </li>
          <li>
            <span>3:00 - 4:00 pm:</span> Presentations & Judging
          </li>
          <li>
            <span>4:00 - 4:30 pm:</span> Awards Ceremony
          </li>
        </ul>
      </RightSection>
    </SectionWrapper>
  );
};

export default ProgramSection;

