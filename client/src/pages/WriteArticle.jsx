import React from "react";
import { Edit, Sparkles } from "lucide-react";
import { useState } from "react";

const WriteArticle = () => {
  const articalLength = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (800-1200 words)" },
    { length: 1600, text: "Long (1200+ words)" },
  ];
  const [selectedLength, setSelectedLength] = useState(articalLength[0]);
  const [input, setInput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="h-full overflow-y-scroll  p-6 flex flex-wrap items-start
    gap-4 text-slate-700"
    >
      {/* Left Side */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded
border border-gray-300"
          placeholder="The future of artifical intelligence is ..."
          required
        />
        <p className="mt-4 text-sm font-medium">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {articalLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`
      text-xs px-4 py-1 border rounded-full cursor-pointer ${
        selectedLength.length === item.length
          ? "bg-blue-50 text-blue-700"
          : "text-gray-500 border-gray-300"
      }`}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>
        <br />
        <button
          className="w-full flex justify-center items-center gap-2
        bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 
        text-sm rounded-lg cursor-pointer"
        >
          <Edit className="w-5" />
          Generate article
        </button>
      </form>
      {/* Right Side */}
      <div
        className="w-full max-w-lg p-4 bg-white rounded-lg
      flex flex-col border border-gray-200 min-h-96 max-h-[600px]"
      >
        <div className="flex items-center gap-3">
          <Edit className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Generated article</h1>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="text-sm text-gray-500 flex flex-col items-center gap-5">
            <Edit className="w-9 h-9" />
            <p>Enter a topic and click "Generate article" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
