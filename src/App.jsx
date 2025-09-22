import { useState } from "react";
import "./App.css";
import generateQuestion from "./questionGenerator";
import Home from "./home";

function App() {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  return (
    <>
      <Home setQuestion={setCurrentQuestions} questions={generateQuestion} />
      <section>
        {currentQuestions.map((questionObj) => {
          return (
            <section key={questionObj["key"]}>
              <h3>{questionObj["question"]}</h3>
              <ul>
                {questionObj["choices"].map((choice, index) => {
                  return <li key={index}>{choice}</li>;
                })}
              </ul>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default App;
