export default function Home({ setQuestion, questions, setDetails, details }) {
  return (
    <>
      <h1>NCAA EXAM PREP BY UNPETRIFIED</h1>
      <ExamForm
        setDetails={setDetails}
        details={details}
        questions={questions}
        setQuestions={setQuestion}
      />
    </>
  );
}

function ExamForm({ setDetails, details, questions, setQuestions }) {
  function update(e) {
    const selectedValue = e.target.value,
      selectedField = e.target.getAttribute("id"),
      newDetails = { ...details };
    if (selectedField === "paper") {
      newDetails["paper"] = selectedValue;
    } else if (selectedField === "no") {
      newDetails["no_of_questions"] = selectedValue;
    }
    setDetails(newDetails);
  }

  function startExam(e) {
    e.preventDefault();

    setQuestions(
      questions(parseInt(details["no_of_questions"]), details["paper"])
    );

    const newDetails = { ...details };
    newDetails["new_exam"] = false;
    setDetails(newDetails);
  }

  return (
    <>
      <form onSubmit={startExam}>
        <label htmlFor="paper">Select the paper you which to take:</label>
        <select name="paper" id="paper" defaultValue="gte" onChange={update}>
          <option value="gte">Gas Turbine Engine</option>
          <option value="pma">Pressurized Metal Airframe</option>
          <option value="gen">General</option>
        </select>
        <label htmlFor="no">Number of question:</label>
        <select name="no" id="no" defaultValue="10" onChange={update}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <input type="submit" value="Start Exam" />
      </form>
    </>
  );
}
