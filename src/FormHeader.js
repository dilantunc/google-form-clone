import React from "react";
import "./FormHeader.css";

function FormHeader({ title, description, setTitle, setDescription }) {
  return (
    <div className="form-header-container">
      <h3 className="text-lg">{title}</h3>
      <div className="form-header">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-title"
          placeholder="Form Başlığı"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-description"
          placeholder="Form Açıklaması"
        />
      </div>
    </div>
  );
}

export default FormHeader;
