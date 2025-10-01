import React, { useState } from "react";
import { Container } from "../style/FAQstyle";
import { IoIosArrowDown } from "react-icons/io";
import sec from "../assets/sec.png";

const faqData = [
  {
    question: "What is SnapBreakfast?",
    answer:
      "SnapBreakfast is a breakfast-focused delivery service that brings fresh , healthy  and affordable meals to your doorstep—designed especially for busy professionals and remote workers ",
  },
  {
    question: "What kind of meals can I order?",
    answer:
      "Our menu includes a variety of options—protein-packed meals, healthy local  favourites (like moi-moi), and lighter global options (smoothies, fruit bowls).",
  },
  {
    question:
      "What makes SnapBreakfast different from other food delivery apps?",
    answer:
      "Unlike general delivery apps, SnapBreakfast focuses only on breakfast, ensuring early delivery, healthier options, and meals designed to keep  you energized for work.",
  },
  {
    question: "What areas do you currently deliver to?",
    answer:
      "We currently deliver within [Lekki, Ikeja, Surulere, Festac and Ogudu]. As we  grow, we’ll expand to cover more locations. You can check availability by entering your address at checkout or when you log in or sign up.",
  },
  {
    question: "How do I pay for my order?",
    answer:
      "You can place orders as early as 9am. Flexible ordering is also available for remote workers who may prefer later breakfast.",
  },
  {
    question: "Can I schedule my breakfast delivery in advance?",
    answer:
      "We accept card payments, bank transfers, and secure payments via Korapay.  Pay-on-delivery may also be available in selected areas in the nearest future.",
  },
];

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <Container>
      <article className="wrapper">
        <div className="about_faq">
          <h1>FAQs about SnapBreakfast</h1>
        </div>
        <div className="faq_holder">
          <div className="faq_box">
            {faqData.slice(0, 3).map((item, idx) => (
              <div style={{ position: "relative" }} key={idx}>
                <div
                  className="FAQS"
                  onClick={() => handleToggle(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <p>{item.question}</p>
                  <i>
                    <IoIosArrowDown />
                  </i>
                </div>
                {openIndexes.includes(idx) && (
                  <div
                    style={{
                      marginTop: "0.5rem",
                      color: "#333",
                      fontSize: "0.95rem",
                      background: "#fffbe6",
                      borderRadius: "0 0 0.5rem 0.5rem",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      padding: "1rem",
                      position: "absolute",
                      left: 0,
                      right: 0,
                      zIndex: 2,
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="faq_box">
            {faqData.slice(3, 6).map((item, idx) => (
              <div style={{ position: "relative" }} key={idx + 3}>
                <div
                  className="FAQS"
                  onClick={() => handleToggle(idx + 3)}
                  style={{ cursor: "pointer" }}
                >
                  <p>{item.question}</p>
                  <i>
                    <IoIosArrowDown />
                  </i>
                </div>
                {openIndexes.includes(idx + 3) && (
                  <div
                    style={{
                      marginTop: "0.5rem",
                      color: "#333",
                      fontSize: "0.95rem",
                      background: "#fffbe6",
                      borderRadius: "0 0 0.5rem 0.5rem",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      padding: "1rem",
                      position: "absolute",
                      left: 0,
                      right: 0,
                      zIndex: 2,
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Faq;
