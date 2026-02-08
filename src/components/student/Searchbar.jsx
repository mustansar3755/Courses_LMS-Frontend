import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ data }) => {
  const [input, setInput] = useState(data ? data : "");
  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();

    navigate("/course-list/" + input);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="mt-8 flex items-center border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden max-w-xl mx-auto"
    >
      <div className="px-4 text-gray-400">
        <Search size={18} />
      </div>

      <input
        type="text"
        placeholder="Search for courses"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 py-3 outline-none text-sm"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 text-sm font-medium"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
