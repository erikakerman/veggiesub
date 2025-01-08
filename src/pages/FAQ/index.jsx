// pages/FAQ/index.jsx
const FAQ = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-shadow">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        <div className="border-b border-taupe pb-4">
          <h2 className="text-xl font-semibold text-shadow mb-2">
            How does the subscription work?
          </h2>
          <p className="text-shadow">
            Choose your vegetables, select your subscription duration, and
            we&apos;ll deliver fresh produce to your door every week.
          </p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQ;
