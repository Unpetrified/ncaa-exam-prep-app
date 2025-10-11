import { useState } from "react";
import "./App.css";
import generateQuestion from "./questionGenerator";
import Home from "./home";
import Question from "./questionCard";
import { Footer } from "./footer";

function App() {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [examDetails, setExamDetails] = useState({
    paper: "gte",
    no_of_questions: "10",
    score: 0,
    new_exam: true,
  });
  return (
    <>
      {examDetails.new_exam ? (
        <Home
          setQuestion={setCurrentQuestions}
          questions={generateQuestion}
          setDetails={setExamDetails}
          details={examDetails}
        />
      ) : (
        <Question
          currentQuestions={currentQuestions}
          details={examDetails}
          setDetails={setExamDetails}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
