import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      alert("What I said? Task wont be empty!");
      return;
    }
    addTask(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please bro do some task!"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
