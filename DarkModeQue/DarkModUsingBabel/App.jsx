const { useState, useEffect } = React;

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.darkMode === 'true');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.darkMode = darkMode;
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(prev => !prev)}>
      Toggle Dark Mode
    </button>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
