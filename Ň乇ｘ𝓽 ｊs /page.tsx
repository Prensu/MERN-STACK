"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputVal.trim() !== "") {
      push(`/prediction/${inputVal}`);
    } else {
      alert("Please enter a valid name!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-yellow-400 shadow-lg rounded-lg p-8 w-80">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Enter Your Name
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Predict Data
          </button>
        </form>
      </div>
    </div>
  );
}
