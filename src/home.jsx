export default function Home({ setQuestion, questions }) {
  return (
    <>
      <h1>NCAA EXAM PREP BY UNPETRIFIED</h1>
      <button
        onClick={() => {
          setQuestion(questions(10));
        }}
      >
        Click to Start
      </button>
    </>
  );
}
