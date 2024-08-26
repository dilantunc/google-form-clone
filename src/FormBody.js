import React, { useState, useEffect } from "react";
import "./FormBody.css";

function FormBody({ question, type, options, setQuestion, setOptions }) {
  const [questionType, setQuestionType] = useState(type);
  const [isSaved, setIsSaved] = useState(false);

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
      setOptions([]); // Clear options if not checkbox or radio
    }
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  const handleEdit = () => {
    setIsSaved(false);
  };

  return (
    <div className="form-card">
      <div className="question-container">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="question-title"
          placeholder="Başlıksız Soru"
          disabled={isSaved} // Disable the question input after save
        />

        <select
          value={questionType}
          onChange={handleQuestionTypeChange}
          className="question-type-selector"
          disabled={isSaved} // Disable question type change after save
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
            // disabled={isSaved} // Disable input after save
          />
        </div>
      )}

      {questionType === "time" && (
        <div className="time-input-container">
          <input
            type="time"
            className="option-input"
            placeholder="Saati seçin"
            // disabled={isSaved} // Disable input after save
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
                // Checkboxes/Radio Buttons remain enabled
              />
              <input
                type="text"
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                className="option-input"
                placeholder={`Seçenek ${index + 1}`}
                disabled={isSaved} // Disable the option text input after save
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

      <div className="button-container">
        {!isSaved ? (
          <button onClick={handleSave} className="save-button">
            Kaydet
          </button>
        ) : (
          <button onClick={handleEdit} className="edit-button">
            Düzenle
          </button>
        )}
      </div>
    </div>
  );
}

export default FormBody;
