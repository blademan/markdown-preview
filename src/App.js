import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function App() {
 const [inputState, setInputState] = useState('# **markdown preview**');

 return (
  <div className="grid grid-cols-2 px-10 py-20  gap-20 h-screen bg-blue-100/50">
   <textarea
    onChange={(e) => setInputState(e.target.value)}
    placeholder={inputState}
    name=""
    id=""
    cols="30"
    rows="40"
    className="bg-white p-6 shadow-2xl rounded-md shadow-black-800"></textarea>
   <div className="flex flex-col p-6">
    <ReactMarkdown>{inputState}</ReactMarkdown>
   </div>
  </div>
 );
}
