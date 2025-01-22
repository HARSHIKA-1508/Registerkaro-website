import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, this software allows you to recover deleted files easily from your desktop.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact customer support via email, chat, or phone, available 24/7.",
    },
    {
      question: "Is my information safe with Register Karo?",
      answer: "Yes, we ensure that all your private information is securely handled.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, all our charges are transparent and disclosed upfront.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <h2>Frequent Ask Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;