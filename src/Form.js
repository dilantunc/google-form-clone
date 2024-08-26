import React, { useState, useEffect } from 'react';
import FormHeader from './FormHeader';
import FormBody from './FormBody';
import './Form.css';

function Form() {
  const [formHeader, setFormHeader] = useState({
    title: "Başlıksız Form",
    description: "Form Açıklaması"
  });

  const [formBodies, setFormBodies] = useState(() => {
    const savedData = localStorage.getItem('formData');
    const parsedData = JSON.parse(savedData);
    return parsedData && parsedData.questions ? parsedData.questions : [{ id: "q1", question: "", type: "checkbox", options: [], answer: [] }];
  });

  const addFormBody = () => {
    const newId = formBodies.length ? `q${formBodies.length + 1}` : "q1";
    setFormBodies([...formBodies, { id: newId, question: "", type: "checkbox", options: [], answer: [] }]);
  };

  const saveForm = () => {
    const updatedForm = {
      formTitle: formHeader.title,
      description: formHeader.description,
      questions: formBodies.map((body) => ({
        id: body.id,
        type: body.type,
        question: body.question,
        required: body.required || false,
        options: body.options || [],
        answer: body.answer || []
      }))
    };

    localStorage.setItem('formData', JSON.stringify(updatedForm));
    console.log('Form verisi kaydedildi:', updatedForm);
  };

  const getAnswers = () => {
    const answers = formBodies.map(body => ({
      question: body.question,
      answer: body.answer
    }));
    console.log('Cevaplar:', answers);
    return answers;
  };

  const updateQuestion = (id, newQuestion) => {
    setFormBodies(
      formBodies.map(body =>
        body.id === id ? { ...body, question: newQuestion } : body
      )
    );
  };

  const updateOptions = (id, newOptions) => {
    setFormBodies(
      formBodies.map(body =>
        body.id === id ? { ...body, options: newOptions } : body
      )
    );
  };

  const updateAnswer = (id, newAnswer) => {
    setFormBodies(
      formBodies.map(body =>
        body.id === id ? { ...body, answer: newAnswer } : body
      )
    );
  };

  const deleteLastFormBody = () => {
    if (formBodies.length > 0) {
      const updatedFormBodies = formBodies.slice(0, -1); 
      setFormBodies(updatedFormBodies);
    }
  };

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      if (parsedData) {
        setFormHeader({
          title: parsedData.formTitle || "Başlıksız Form",
          description: parsedData.description || "Form Açıklaması"
        });
        setFormBodies(parsedData.questions || [{ id: "q1", question: "", type: "checkbox", options: [], answer: [] }]);
      }
    }
  }, []);

  return (
    <div className="form-container">
      <FormHeader 
        title={formHeader.title}
        description={formHeader.description}
        setTitle={(newTitle) => setFormHeader({ ...formHeader, title: newTitle })}
        setDescription={(newDescription) => setFormHeader({ ...formHeader, description: newDescription })}
      />
      {formBodies.map((body) => (
        <FormBody 
          key={body.id}
          id={body.id}
          question={body.question}
          type={body.type}
          options={body.options}
          answer={body.answer}
          setQuestion={(newQuestion) => updateQuestion(body.id, newQuestion)}
          setOptions={(newOptions) => updateOptions(body.id, newOptions)}
          setAnswer={(newAnswer) => updateAnswer(body.id, newAnswer)}
        />
      ))}
      <div className='button-container'>
        <button onClick={addFormBody} className="float-button">
          Soru Ekle
        </button>
        <button onClick={saveForm} className='float-button'>
          Kaydet
        </button>
        <button onClick={deleteLastFormBody} className="float-button delete-button">
         Sil
        </button>
      </div>
    </div>
  );
}

export default Form;
