import React from 'react';

const faqs = [
  { question: "What is this website about?", answer: "This website offers insights and resources on [topic]." },
  { question: "How do I use this feature?", answer: "You can use this feature by [explanation]." },
  // Add more FAQs as needed
];

const FAQ = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
