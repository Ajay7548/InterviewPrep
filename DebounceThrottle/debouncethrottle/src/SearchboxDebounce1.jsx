import { useEffect, useState } from "react";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const UniversitySearch = () => {
  const [query, setquery] = useState("");
  const [results, setresults] = useState([]);

  const fetchData = debounce(async (searchItem) => {
    if (!searchItem) return;

    try {
      const res = await fetch(
        `http://universities.hipolabs.com/search?country=India&name=${searchItem}`
      );
      const data = await res.json();
      setresults(data.map((UniName) => UniName.name));
    } catch (error) {
      console.log("Error fetching data", error.message);
      setresults([]);
    }
  }, 500);

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <div className="w-1/2">
      <input
        type="text"
        className="border p-2 w-full rounded-md bg-gray-800"
        placeholder="Enter University name"
        onChange={(e) => setquery(e.target.value)}
      />
      <ul className="overflow-auto max-h-96 mt-2">
        {results.length > 0 ? (
          results.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No result found</li>
        )}
      </ul>
    </div>
  );
};

export default UniversitySearch;
