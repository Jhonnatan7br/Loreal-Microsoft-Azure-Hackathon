import logo from './Brandstorm.png';
import hairImage from './Hair.png'; // Import the image here

import './App.css';
import './Azure.js';
import './Azure2.js';
import React, { useState } from 'react';
// Import your Azure functions
import { uploadToAzure, analyzeWithAzure2 } from './Azure';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonResponse, setJsonResponse] = useState(null);
  const [textResponse, setTextResponse] = useState('');

  const handleFileUpload = event => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadPhotoToAzure = async () => {
    // Assume uploadToAzure is a function that handles the file upload
    const json = await uploadToAzure(selectedFile);
    setJsonResponse(json);
  };

  const sendJsonToAzure2 = async () => {
    // Assume analyzeWithAzure2 is a function that sends the json and gets back the text
    const textJson = await analyzeWithAzure2(jsonResponse);
    setTextResponse(textJson.text);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="rainbow-text">
        Look at this incredible recommendation for your Hair
        </div>
        <div className="result-box">{textResponse}</div>
        <img src={hairImage} alt="Hair" /> {/* Add the image here */}
        <a
          className="App-link"
          href="https://brandstorm.loreal.com/es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Loreal Braindstorm information
        </a>
      </header>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={uploadPhotoToAzure}></button>
      <button onClick={sendJsonToAzure2} disabled={!jsonResponse}></button>
      
    </div>
  );
}

export default App;