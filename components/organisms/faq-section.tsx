import Dialogue from "../ui/8bit/blocks/dialogue";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Yurika?",
      answer: "Yurika is a blockchain innovation program designed to foster learning and collaboration in the blockchain space."
    },
    {
      question: "Who can join Yurika?",
      answer: "Anyone interested in blockchain technology, from beginners to experienced developers, can join Yurika."
    },
    {
      question: "How do I get started?",
      answer: "You can start by exploring our Developer, Partner, or Sponsor paths to find resources and opportunities that suit your interests."
    },
    {
      question: "Are there any costs involved?",
      answer: "Yurika offers many free resources, but some advanced programs or events may have associated costs. Please check specific offerings for details."
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-black mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6 max-w-5xl text-black">
        {faqs.map((faq, index) => (
          <>
            <Dialogue
              key={"yurika-" + index}
              title={faq.question}
              avatarFallback="Y"
              player={true}
              className="bg-white p-4 rounded-lg shadow-md w-auto h-fit"
            />
            <Dialogue
              key={"user-" + index}
              title={faq.answer}
              avatarFallback="U"
              player={false}
              className="bg-white p-4 rounded-lg shadow-md w-auto h-fit"
            />
          </>
        ))}
      </div>
    </div>
  );
}