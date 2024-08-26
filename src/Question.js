import React, { useState, useEffect } from 'react';

function Question() {
  const [formData, setFormData] = useState(null);
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch('./forms.json');
          if (!response.ok) {
            throw new Error('Veri çekilemedi');
          }
          const data = await response.json();
          setFormData(data);
          localStorage.setItem('formData', JSON.stringify(data));
        } catch (error) {
          console.error('Hata:', error);
        }
      };
      fetchData();
    }

    const savedAnswers = JSON.parse(localStorage.getItem('formAnswers'));
    if (savedAnswers) {
      setAnswers(savedAnswers);
    }
  }, []);

  if (!formData) {
    return <div>Loading form data...</div>;
  }

  if (!answers) {
    return <div>Loading answers...</div>;
  }

  return (
    <div>
      <h1>{formData.formTitle}</h1>
      <p>{formData.description}</p>
      {formData.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.question}</h3>
          {question.type === 'text' && (
            <p>{answers[question.id]}</p>
          )}
          {question.type === 'checkbox' && (
            <ul>
              {answers[question.id] && answers[question.id].map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          )}
          {question.type === 'radio' && (
            <p>{answers[question.id]}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Question;
