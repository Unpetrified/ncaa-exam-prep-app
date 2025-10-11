export function HomeHeader() {
  return (
    <header>
      <h1>XAMENA</h1>
    </header>
  );
}

export function ExamHeader({ details, submit, newExam }) {
  return (
    <header className="exam_header">
      <h1>XAMENA</h1>
      <section className="buttons">
        <button onClick={newExam} className="new_exam">
          New Exam
        </button>
        <button className="score">{details["score"]}</button>
        <button className="submit" onClick={(e) => submit(e, details)}>
          Submit
        </button>
      </section>
    </header>
  );
}
