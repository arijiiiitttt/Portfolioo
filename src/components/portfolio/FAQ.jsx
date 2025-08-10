import FAQItem from "./FAQItem";
import { useState, useEffect } from 'react'; // Import useState and useEffect

const faqsData = [ // Renamed to faqsData to avoid confusion with state
  { question: "", answer: "" },
 
];

const FAQ = () => {
  const [faqs, setFaqs] = useState([]); // State to hold the FAQs

  useEffect(() => {
    // Simulate fetching data from an API (replace with your actual API call)
    // This is just for demonstration purposes.  In a real application,
    // you would use `fetch` or `axios` to make an API request.
    const fetchData = async () => {
      // Simulate a delay to mimic network latency
      await new Promise(resolve => setTimeout(resolve, 500));

      // In a real application, you would handle errors here.
      setFaqs(faqsData); // Set the state with the fetched data
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once on mount

  if (!faqs || faqs.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-lime-200 text-black inline-block px-4 py-2 rounded">
            Your Questions Answered (F.A.Q's)
          </h2>
          <p>Loading FAQs...</p> {/* Or a more sophisticated loading indicator */}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-lime-200 text-black inline-block px-4 py-2 rounded">
          Your Questions Answered (F.A.Q's)
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;