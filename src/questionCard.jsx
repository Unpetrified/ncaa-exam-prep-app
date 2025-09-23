export default function Question({ currentQuestions, details, setDetails }) {
  let number = 1;
  return (
    <>
      <section className="buttons">
        <button onClick={newExam}>New Exam</button>
        <button>{details["score"]}</button>
        <button onClick={(e) => submit(e, details)}>Submit</button>
      </section>
      {currentQuestions.map((questionObj) => {
        return (
          <section key={questionObj["key"]} className="card">
            <h3>
              {number++}. {questionObj["question"]}
            </h3>
            <ul>
              {questionObj["choices"].map((choice, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => mark(e, details, setDetails)}
                    data-answer={questionObj["answer"]}
                  >
                    {choice}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
}

function submit(e, details) {
  const no = parseInt(details["no_of_questions"]),
    finalScore = (details["score"] / no) * 100;

  isNaN(finalScore)
    ? alert(
        `Your score is extremely poor. Click the New Exam Button to take another one.`
      )
    : alert(
        `Your score is ${finalScore}%. Click the New Exam Button to take another one.`
      );
}

function newExam() {
  location.reload();
}

function mark(e, details, setDetails) {
  const correct_answer = e.target.getAttribute("data-answer").toLowerCase(),
    choice = e.target;
  // mark answer and disable the question
  if (correct_answer === choice.textContent.toLowerCase()) {
    const newDetails = { ...details };
    newDetails["score"] += 1;
    setDetails(newDetails);
    choice.style.backgroundColor = "green";
  } else {
    choice.style.backgroundColor = "red";
  }
  e.target.style.color = "white";

  let allOptions = choice.parentNode.querySelectorAll("li");
  allOptions.forEach((option) => {
    option.style.pointerEvents = "none";
    if (option.textContent.toLowerCase() === correct_answer) {
      option.style.backgroundColor = "green";
      option.style.color = "white";
    }
  });
  choice.parentNode.parentNode.style.opacity = 0.6;
}
