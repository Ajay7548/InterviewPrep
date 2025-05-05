// Follow-up Interview Questions You Might Get:
// How would you handle high-frequency events in React?
// answer
// To handle high-frequency events like scroll, resize, or input, 
// I use debounce or throttle 
// inside useEffect or useCallback hooks. This prevents
//  unnecessary re-renders or expensive operations from running 
// too often.


//searchbox example
import { useState, useEffect } from 'react';

function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchData = debounce(async (searchTerm) => {
    if (!searchTerm) return;
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
const data = await res.json();
setResults(data.map(d => d.show.name));
  }, 500);

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}


//form validation example
function debounce(func, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
}
  
export default function EmailInput() {
    const [email, setEmail] = useState('');
    const [valid, setValid] = useState(true);
  
    const validateEmail = debounce((email) => {
      const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      setValid(isValid);
    }, 400);
  
    useEffect(() => {
      validateEmail(email);
    }, [email]);
  
    return (
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: valid ? 'green' : 'red' }}
      />
    );
}
  
