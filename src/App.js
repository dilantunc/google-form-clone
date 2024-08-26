import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";
import Login from "./Login";
import Question from "./Question";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "FormHeader":
        return (
          <>
            <FormHeader />
            <FormBody />
          </>
        );
      case "login":
        return <Login />;
      case "question":
        return <Question />;
      case "home":
        return null;
      default:
        return (
          <>
            <FormHeader />
            <FormBody />
          </>
        );
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
