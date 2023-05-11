import React, { useState } from 'react';
import './Main.css';
import Background from '../../Component/Background/Background';

function Main() {
  const [prompt, setPrompt] = useState('');
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function query(data) {
    setIsLoading(true);

    const response = await fetch(
      'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
      {
        headers: { Authorization: 'Bearer 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' },
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    setIsLoading(false);

    return result;
  }

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = () => {
    query({ inputs: prompt }).then((response) => {
      setImageData(URL.createObjectURL(response));
    });
  };

  const handleClear = () => {
    setPrompt('');
  };

  return (
    <div className="mainContainer">
      <div className="mainContent" id="main_content">
        <h1>Stable Diffusion</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          imageData && <img src={imageData} alt="" />
        )}
        <div className="mainInputs">
          <input
            type="text"
            className="inputText"
            placeholder="prompt"
            value={prompt}
            onChange={handleInputChange}
            style={{ whiteSpace: 'wrap' }}
          />
          <input
            type="submit"
            className="inputButton"
            value="Search"
            onClick={handleSubmit}
          />
          <input
            type="reset"
            className="inputButton"
            value="Clear"
            onClick={handleClear}
          />
        </div>
      </div>
      <Background />
    </div>
  );
}

export default Main;
