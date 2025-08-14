import React, { useState } from "react";

const QuoteCard = () => {
  const [active, setActive] = useState("length");
  const [quote, setQuote] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <p className="text-2xl font-bold text-center transition-colors duration-300 hover:text-[#5064F7]">
        Get an Instant Quote on your Project!
      </p>
      <div className="lg:flex justify-between text-sm mt-10">
        <button
          onClick={() => setActive("length")}
          className={`px-2 py-4 lg:w-[48%] w-full lg:mb-0 mb-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md
            ${active === "length" ? "text-white bg-[#5064F7]" : " text-[#5064F7] bg-[#E1E7FF] hover:bg-[#D1DAFF]"}`}
        >
          Price By Length
        </button>

        <button
          onClick={() => setActive("budget")}
          className={`px-2 py-4 lg:mb-auto lg:w-[48%] w-full rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md
            ${active === "budget" ? "text-white bg-[#5064F7]" : " text-[#5064F7] bg-[#E1E7FF] hover:bg-[#D1DAFF]"}`}
        >
          Deliverables By Budget
        </button>
      </div>
      {active === "length" ? (
        <div className="my-4 bg-[#E1E7FF] lg:flex justify-between rounded-md p-2 transform transition-all duration-500 ease-in-out animate-fadeIn">
          <p className="text-sm lg:ml-6  my-auto text-[#5064F7] transition-colors duration-300">
            <strong>Video Length</strong> (in Seconds, 15s minimum)
          </p>
          <input
            onChange={(e) => {
              setQuote(e.target.value);
            }}
            type="number"
            value={quote}
            className="text-[#5064F7] bg-white lg:w-auto w-full p-4 rounded-md transition-all duration-300 focus:ring-2 focus:ring-[#5064F7] focus:ring-opacity-50 focus:scale-105 hover:shadow-md"
          />
        </div>
      ) : (
        <div className="my-4 bg-[#E1E7FF] lg:flex justify-between rounded-md p-2 transform transition-all duration-500 ease-in-out animate-fadeIn">
          <p className="text-sm lg:ml-6 my-auto text-[#5064F7] transition-colors duration-300">
            <strong>Budget</strong> ($700 Minimum)
          </p>
          <input
            onChange={(e) => {
              setBudget(e.target.value);
            }}
            type="number"
            value={budget}
            className="text-[#5064F7] bg-white p-4 lg:w-auto w-full rounded-md transition-all duration-300 focus:ring-2 focus:ring-[#5064F7] focus:ring-opacity-50 focus:scale-105 hover:shadow-md"
          />
        </div>
      )}
      {/* <button onClick={() => getValue()} className='bg-black text-white p-4 rounded-xl w-full'>Get Quote</button> */}
      {active === "length"
        ? Number(quote) >= 15 && (
            <div className="mt-16 transform transition-all duration-700 ease-in-out animate-slideUp">
              <p className="text-xl text-[#B2B2B2] mb-1 transition-colors duration-300">Amount</p>
              <p className="text-3xl text-[#0B1023] font-bold transition-all duration-500 hover:text-[#5064F7] hover:scale-110">
                ${parseInt(quote, 10) * 100 || 0}
              </p>
            </div>
          )
        : Number(budget) >= 700 && (
            <div className="mt-8 transform transition-all duration-700 ease-in-out animate-slideUp">
              <p className="text-xl text-[#B2B2B2] mb-1 transition-colors duration-300">Single Video Length</p>
              <p className="text-3xl text-[#0B1023] font-bold transition-all duration-500 hover:text-[#5064F7] hover:scale-110">
                {Math.floor(Number(budget) / 100)}s
              </p>
            </div>
          )}
    </div>
  );
};

export default QuoteCard;
