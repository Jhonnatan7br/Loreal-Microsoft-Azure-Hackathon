import logo from './Brandstorm.png';
import hairImage from './Hair.png'; // Import the image here
import F1 from './F1.png';
import F2 from './F2.png';
import Page from './Page.png';
import Filter1 from './Filter1.png';
import Filter2 from './Filter2.png';


import './App.css';
import './Azure.js';
import './Azure2.js';
import React, { useState } from 'react';
// Import your Azure functions
import { uploadToAzure, analyzeWithAzure2 } from './Azure';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonResponse, setJsonResponse] = useState(null);
  const [textResponse, setTextResponse] = useState('List of posible products for you');

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
        
        {/* Horizontal grid container */}
        <div className="horizontal-grid-container">
          {/* Left image */}
          <div className="grid-item">
            <img src={F1} alt="Hair" />
          </div>

          {/* Middle image (main content) */}
          <div className="grid-item main-image">
            <img src={hairImage} alt="Hair" />
          </div>

          {/* Right image */}
          <div className="grid-item">
            <img src={F2} alt="Hair" />
          </div>
        </div>
        <div className="rainbow-text">
        The recomendated products for you would appear below, also you can try filters 
        </div>
        {/* Transparent frame containing the button */}
        <div style={{ background: 'transparent', border: '1px solid transparent', borderRadius: '5px', padding: '5px', display: 'inline-block' }}>
          {/* Rounded border button with image */}
          <a href="https://www.lorealprofessionnel.fr/soin-du-cheveu/nouveaut%C3%A9" className="rounded-button" target="_blank" rel="noopener noreferrer" >
            <img src={Page} alt="Page" />
          </a>
          <a href="https://www.lorealprofessionnel.fr/coloration/semi-permanent" className="rounded-button" target="_blank" rel="noopener noreferrer">
          <img src={Filter1} alt="Filter1" />
          </a>
          <a href="https://www.youtube.com/watch?v=Enralxu2_lY" className="rounded-button" target="_blank" rel="noopener noreferrer">
          <img src={Filter2} alt="Filter2" />
          </a>
        </div>
        <a
          className="App-link"
          href="https://brandstorm.loreal.com/es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rainbow-text">
          Loreal Brandstorm
          </div>
        </a>
      </header>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={uploadPhotoToAzure}></button>
      <button onClick={sendJsonToAzure2} disabled={!jsonResponse}></button>
      
    </div>
  );
}

export default App;