import React, { useState, useEffect } from "react";
import "./FormBody.css";

function FormBody({ question, type, options, setQuestion, setOptions }) {
  const [questionType, setQuestionType] = useState(type);
  const [isSaved, setIsSaved] = useState(false);
  const [color, setColor] = useState('white');

  useEffect(() => {
    if ((questionType === "checkbox" || questionType === "radio") && options.length === 0) {
      setOptions(["Seçenek 1"]);
    }
  }, [questionType, setOptions, options]);

  const addOption = () => {
    setOptions([...options, `Seçenek ${options.length + 1}`]);
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
    if (event.target.value !== "checkbox" && event.target.value !== "radio") {
      setOptions([]); 
    }
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  const handleEdit = () => {
    setIsSaved(false);
    setColor(color === 'white' ? 'aquawhite' : 'white');
  };

  return (
    <div 
      className="form-card" 
      style={{ '--card-bg-color': color }} 
      onClick={handleEdit } 
      onDoubleClick={handleSave}
    >
      <div className="question-container">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="question-title"
          placeholder="Başlıksız Soru"
          disabled={isSaved} 
        />

        <select
          value={questionType}
          onChange={handleQuestionTypeChange}
          className="question-type-selector"
          disabled={isSaved} 
        >
          <option value="radio">Radyo Butonu</option>
          <option value="checkbox">Checkbox</option>
          <option value="text">Metin</option>
          <option value="time">Saat</option>
        </select>
      </div>

      {questionType === "text" && (
        <div className="text-input-container">
          <textarea
            className="textarea-input"
            placeholder="Cevabınızı girin (maks. 400 kelime)"
            rows="8"
            maxLength="400"
            disabled={isSaved} 
          />
        </div>
      )}

      {questionType === "time" && (
        <div className="time-input-container">
          <input
            type="time"
            className="option-input"
            placeholder="Saati seçin"
            disabled={isSaved} 
          />
        </div>
      )}

      {(questionType === "radio" || questionType === "checkbox") && (
        <div className={`options-container ${options.length === 0 ? 'hide' : ''}`}>
          {options.map((option, index) => (
            <div key={index} className="option-item">
              <input
                type={questionType}
                className="radio-input"
                name="option"
                id={`option-${index}`}
              />
              <input
                type="text"
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                className="option-input"
                placeholder={`Seçenek ${index + 1}`}
                disabled={isSaved} 
              />
            </div>
          ))}
          {!isSaved && (
            <div className="add-option-container">
              <button onClick={addOption} className="add-option-button">
                Seçenek ekle
              </button>
              <span className="add-other-option">veya</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FormBody;
