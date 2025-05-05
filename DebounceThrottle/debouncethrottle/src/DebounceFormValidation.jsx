import React, { useState, useEffect } from "react";

// Debounce function to delay validation
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const EmailInputWithValidation = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);

  // Debounced email validator
  const validateEmail = debounce((email) => {
    const isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    setValid(isValid);
  }, 400);

  useEffect(() => {
    if (email) {
      validateEmail(email);
    }
  }, [email]);

  return (
    <div className="flex flex-col gap-1 w-full max-w-sm">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`border p-2 rounded ${
          email.length === 0 ? ""  : valid ? "border-green-500" : "border-red-500"
        }`}
      />
      {email && !valid && (
        <span className="text-sm text-red-500">Invalid email format</span>
      )}
    </div>
  );
};

export default EmailInputWithValidation;
