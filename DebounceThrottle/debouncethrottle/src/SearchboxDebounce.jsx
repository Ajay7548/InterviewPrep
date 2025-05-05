import React, { useState, useEffect } from "react";

// Debounce function
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const UniversitySearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = debounce(async (searchTerm) => {
    if (!searchTerm) return;

    try {
        const res = await fetch(`http://universities.hipolabs.com/search?country=India&name=${searchTerm}`);
        const data = await res.json();
        setResults(data.map(u => u.name));
        
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
    }
  }, 500);

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <div className=" w-1/2">
      <input
        type="text"
        className="border p-2 mb-2 w-full rounded-md "
        placeholder="Search University name..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className=" overflow-auto max-h-100 mt-2" >
        {results.length > 0 ? (
          results.map((item, i) => <li key={i}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default UniversitySearch;
