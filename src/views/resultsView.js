/**
 * Create a full result element
 * @returns {Element}
 */
import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';

export const sumOfRightAnswers = function () {
  return quizData.questions.reduce((rightAnswers, question) => {
    return question.selected === question.correct
      ? (rightAnswers += 1)
      : rightAnswers;
  }, 0);
};

export const createResultsElement = () => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>Result</h1>
    <p>Your rating is ${sumOfRightAnswers()} out of 10 </p>
    <button id="${RESTART_QUIZ_BUTTON_ID}">Restart Journey</button>
  `;

  return element;
};
