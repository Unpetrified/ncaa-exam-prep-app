import questionBankGen from "./questionBank/gen";
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
      questionBankGen;
      break;
  }

  let questionList = [],
    keysUsed = [];

  // 1. Get all keys
  const keys = Object.keys(questionBank);

  console.log(num_of_questions);

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
        choices: questionBank[randomKey].choices,
        key: crypto.randomUUID(),
      };

    questionList.push(questionObject);
  }
  return questionList;
}
