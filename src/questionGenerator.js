// import questionBankGen from "./questionBank/gen";
import questionBankGTE from "./questionBank/gte";
import questionBankPMA from "./questionBank/pma";

export default function generateQuestion(num_of_questions, category) {
  let questionBank;

  switch (category) {
    case "pma":
      questionBank = questionBankPMA;
      break;
    case "gte":
      questionBank = questionBankGTE;
      break;

    default:
      alert("Not ready yet");
      break;
  }

  let questionList = [],
    keysUsed = [];

  // 1. Get all keys
  const keys = Object.keys(questionBank);

  console.log(keys.length);

  if (num_of_questions === "all") {
    num_of_questions = keys.length;
  }

  // 2. Pick a random key
  while (questionList.length < num_of_questions) {
    const randomIndex = Math.floor(Math.random() * keys.length);

    const randomKey = keys[randomIndex];

    // prevent duplicate questions
    if (keysUsed.includes(randomKey)) continue;
    keysUsed.push(randomKey);

    let lastKey = keysUsed[keysUsed.length - 1],
      questionObject = {
        question: lastKey,
        answer: questionBank[randomKey].answer,
        choices: shuffle(questionBank[randomKey].choices),
        key: crypto.randomUUID(),
      };

    questionList.push(questionObject);
  }
  return questionList;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0 ≤ j ≤ i
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
