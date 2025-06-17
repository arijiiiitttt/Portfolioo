import FAQItem from "./FAQItem";
import { useState, useEffect } from 'react'; // Import useState and useEffect

const faqsData = [ // Renamed to faqsData to avoid confusion with state
  { question: "Is this for me?", answer: "Yes, if you're interested in drawing." },
  { question: "I don't believe I can learn drawing", answer: "Everyone can learn with the right practice." },
  { question: "Can't I just find this information online?", answer: "You could, but this is structured for faster learning." },
  { question: "I'm a Student, Parent, I have a Full Time Job, can I do this?", answer: "Yes! It's designed to be flexible." },
  { question: "Why 100 days? Why not 21 or 60 days?", answer: "100 days builds consistent long-term habits." },
  { question: "Can I do this Program Traditionally? Or do I need Digital Tools?", answer: "Both traditional and digital methods work." },
  { question: "What tools do you recommend for this Program?", answer: "Simple pencils or tablets, depending on your medium." },
  { question: "Will I become Picasso in 100 days??", answer: "You'll definitely improve and find your own style." },
  { question: "I am an intermediate artist. Is this program for me?", answer: "Yes, it covers fundamentals to advanced." },
  { question: "100 Days is too long!", answer: "You can pace it however you want." },
  { question: "Will I get feedback on my work?", answer: "Yes, feedback is provided in group sessions." },
  { question: "How long do I have access to the Program?", answer: "You'll have lifetime access." },
  { question: "How many times can I do Drawing Camp?", answer: "As many as you like!" },
  { question: "Your testimonials are too good. Are they fake?", answer: "They are 100% real from actual students." },
  { question: "I've signed up for the program, I haven't received any emails.", answer: "Check spam/junk or contact support." },
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