import React, { useState } from "react";
import styled from "styled-components";


const SectionWrapper = styled.div`
  background: #f5f5f5;
  color: #1e1e4c;
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  color: #ed6842;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Accordion = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: white;
`;

const Question = styled.div`
  background: ${({ isActive }) => (isActive ? "#ed6842" : "#1e1e4c")};
  color: white;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #ed6842;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const Answer = styled.div`
  background: #f5f5f5;
  color: #1e1e4c;
  padding: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const QASection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: "Can we use online resources during the hackathon?",
      answer:
        "Yes, internet usage is allowed but restricted to factual research and examples. Direct copying of code from online sources is not permitted.",
    },
    {
      question: "What is the primary focus of the judging criteria?",
      answer:
        "The judging focuses equally on five criteria: Design, Originality, Presentation, Structure, and Code Quality, each worth 20 points.",
    },
    {
      question:
        "What should we do if our device encounters technical issues during the event?",
      answer:
        "Approach the designated technical support staff at the help stations. They will assist with hardware or software problems but cannot help with project-specific issues.",
    },
    {
      question: "Are we allowed to use pre-written code or libraries?",
      answer:
        "No, all code must be original and written during the hackathon. However, teams can use standard libraries or frameworks as long as they fully understand their use and implementation.",
    },
    {
      question: "Can AI tools generate code for our project?",
      answer:
        "No, AI tools can be used only for brainstorming and high-level idea generation but not for producing functional code.",
    },
    {
      question: "What happens if we exceed the maximum number of team members?",
      answer:
        "Each team must consist of 2-4 students. Teams exceeding this limit will not be eligible to participate.",
    },
    {
      question: "How will food and snacks be distributed during the event?",
      answer:
        "Meals and snacks will be served in designated areas. Kosher breakfast, lunch, and snacks, including gluten-free and vegan options, will be provided.",
    },
    {
      question: "Are teams allowed to switch members once registration is complete?",
      answer: "No, team composition is final upon registration.",
    },
    {
      question: "Can we bring additional personal devices for backup?",
      answer:
        "No, only the pre-registered equipment (laptops and tablets) may be used during the event. Personal devices are not allowed.",
    },
    {
      question: "What is the policy for parents or chaperones during the event?",
      answer:
        "Parents are not permitted to attend the event. Chaperones are allowed but must remain in designated areas.",
    },
    {
      question: "How can we ensure our presentation is engaging and impactful?",
      answer:
        "Focus on clear communication, enthusiasm, and professionalism. Highlight your app's purpose, unique features, and impact on disaster response.",
    },
    {
      question: "Will there be any resources provided for teams unfamiliar with PyCharm or VS Code?",
      answer:
        "Yes, the Q&A session will include a brief overview of these tools. Additionally, participants can ask questions about their setup before the event.",
    },
    {
      question: "What is the best way to handle disagreements or conflicts within a team?",
      answer:
        "Open communication is key. Assign roles and responsibilities early on to avoid overlap. If conflicts persist, team members can consult a proctor for mediation.",
    },
    {
      question: "Are there specific formats for the project presentation?",
      answer:
        "The format is flexible but should include a clear explanation of the problem, your solution, and how your app addresses it. Demonstrate your app’s functionality and structure during the presentation.",
    },
    {
      question: "Can we collaborate with other teams for brainstorming or share general ideas?",
      answer:
        "No, collaboration is limited to members within the same team. Sharing ideas, code, or strategies between teams is prohibited.",
    },
    {
      question: "Will technical assistance be available throughout the event?",
      answer:
        "Yes, tech support staff will be present throughout the event to handle hardware and software issues.",
    },
    {
      question: "Is there a time limit for presentations?",
      answer:
        "Presentations should be concise, typically 5-7 minutes, followed by a short Q&A with the judges.",
    },
    {
      question: "How can we prepare for the originality criterion in judging?",
      answer:
        "Focus on innovative ideas and novel solutions for disaster-related problems. Avoid replicating existing apps or concepts.",
    },
    {
      question: "Are there restrictions on the type of project we can create?",
      answer:
        "Projects must align with the hackathon theme of disaster response and preparedness. Ensure they are feasible and address a specific problem.",
    },
    {
      question: "How will feedback be provided after the event?",
      answer:
        "Judges will provide brief feedback after presentations. Detailed feedback will be shared via email post-event.",
    },
    {
      question: "How will teams receive their T-shirts and badges during registration?",
      answer:
        "T-shirts and badges will be provided on the morning of the event to the teacher in charge of each team.",
    },
    {
      question:
        "Can participants practice or prepare using similar scoring rubrics before the hackathon?",
      answer:
        "Yes, participants should continue practicing coding as they have been. It’s also recommended to familiarize themselves with PowerPoint or similar tools for presenting their work.",
    },
    {
      question: "What are the exact kosher and dietary restrictions for food?",
      answer:
        "Kosher food will be provided and is suitable for those requiring it. For those who do not require kosher food, it is still safe to eat. Please notify the organizers in advance of any allergies or dietary restrictions.",
    },
    {
      question:
        "Are substitutes allowed if a team member cannot attend on the day of the event?",
      answer:
        "Substitutions will be handled by the admin in charge of the event. Contact them at jmondragon@jlamiami.org.",
    },
  ];

  return (
    <SectionWrapper id="FAQs">
      <Title>Frequently Asked Questions</Title>
      <Accordion>
        {questionsAndAnswers.map((qa, index) => (
          <div key={index}>
          <Question
            isActive={activeIndex === index}
            onClick={() => toggleAnswer(index)}
          >
            {qa.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </Question>
          <Answer isOpen={activeIndex === index}>{qa.answer}</Answer>
        </div>
        ))}
      </Accordion>
      
    </SectionWrapper>
    

  );
};

export default QASection;

