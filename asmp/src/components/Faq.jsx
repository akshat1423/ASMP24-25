import React, { useState } from "react";
import "./Faq.css";
import Accordion from "react-bootstrap/Accordion";

const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
  return (
    <div className="p-3 font-fraunces">
      <div
        className="font-normal text-2xl my-4 w-10/12 flex justify-between items-center"
        onClick={toggleFAQ}
      >
        <span className="cursor-pointer">{question}</span>
        {!isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={44}
            height={44}
            color={"#ffffff"}
            fill={"white"}
          >
            <path
              d="M12 4V20M20 12H4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <div className="font-normal text-xl my-5 w-10/12">{answer}</div>
      )}

      <div className="border-1 w-10/12"></div>
    </div>
  );
};

const FAQs = () => {
  const faqsData = [
    {
      question: "Approximately how many days will it take to get the mentor and further information regarding the process?",
      answer: "You will be allocated a mentor or be given further information regarding your allocation within 7 days.",
    },
    {
      question: "What is the time for which I will be allocated a mentor?",
      answer: " Your mentor is being assigned to you for a year officially, but most people build lifelong bonds with their mentors and remain in touch even after the program ends.",
    },
    {
      question: "How will I get notified about the process?",
      answer: "You will receive emails notifying you about all the updates regarding the allocation. You will also receive contact details of your allocated mentor and information about the interactive sessions scheduled by us via email.",
    },
    {
      question: "How will my personal details be used?",
      answer: "Your personal details such as your name, roll number, and contact information will remain confidential. Only the allocated mentor will have access to your contact information.",
    },
    {
      question: "What is the process after registration for a mentee?",
      answer: "A mentor will be allocated to you based on your preferences and SOPs after the registration is completed. You have to initiate the conversation with your mentor and then you can mutually decide the way ahead. We will also have a few follow-ups for your assistance.",
    },
    {
      question: "I am having trouble registering. What should I do?",
      answer: "There might be an issue with webmail due to which you may not be receiving the verification mail. Wait for webmail to be up again and you will be good to go. If you are facing any other issue, contact an ASMP coordinator as soon as possible.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div id="faq" className="bg-[url('https://s3-alpha-sig.figma.com/img/3aea/7cc0/4a88f35f3195ab75b4a4319ee848c502?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WnEDAz6TCloCnfy6FXeG9Q0CInhTBWDHXsb6Jucw8dCQnrHTDK1cxgs~O-wx-TNulMKTNYpZgHsgzGIAy-vUtyTMW0FDY0A2J3JxJ3FFVwS8Spt9w-tBgW4Sz5efPzTxaa4Jcm4pLnWC1bYTeWTKNqU3yTVJpeoWOVhe4AQRdcM4KffUA9vf~UV8wDrmIUYkBpoxHce-uzus66qXP3ulgjP15WZZXmQvDuIzvUbOASlw8JPmw1PEt9yVaAotMGACk3HZW1GMwljE83nlYEAvoRvzBq1GkXp9D-BMvqnKxhVO7ko1iimZXSrhh2UwPn7pqOTeZ-Vt2KrEAyXnoAM3-g__')] bg-cover">
      <div className="font-fraunces text-6xl font-bold mx-5 p-4 opacity-90 text-white">
        FAQ's
      </div>
      <div className="bg-gradient-to-r from-gray-950 from-0% via-slate-800 via-43.5% to-black 87.5% m-5 mb-0 p-4 text-white opacity-70">
        <Accordion defaultActiveKey="0">
          {faqsData.map((item, index) => {
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header className="font-fraunces pt-5">
                  {item.question}
                </Accordion.Header>
                <Accordion.Body className="font-fraunces pb-5 mt-2">
                  {item.answer}
                </Accordion.Body>
                <div className="border-1 w-full mt-2"></div>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
      <div className="faq-footer"></div>
    </div>
  );
};

export default FAQs;
