import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions";
// import quizIsCompleteImg from "../assets/quiz-complete.png";
// import QuestionTimer from "./QuestionTimer";
// import Answer from "./Answers";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  //why the below managing state is not optimal?
  // const [activeQuestionIndex, setActiveQuestionIndex] =useState(0);
  // const [userAnswers, setUserAnswers] = useState([]);

  //optimal way
  const [userAnswers, setUserAnswers] = useState([]);

  //   const shuffledAnswers = useRef();

  //   const [answerState, setAnswerState] = useState("");

  // const activeQuestionIndex =
  // answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // setAnswerState('answered');
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      //   setTimeout(() => {
      //     if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
      //       setAnswerState("correct");
      //     } else {
      //       setAnswerState("wrong");
      //     }

      //     setTimeout(() => {
      //       setAnswerState("");
      //     }, 2000);
      //   }, 1000);
    },
    [],
    // [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
    // return (
    //   <div id="summary">
    //     <img src={quizIsCompleteImg} alt="quiz complete image" />
    //     <h2>Quiz Complete</h2>
    //   </div>
    // );
  }

  //   if (!shuffledAnswers.current) {
  //     shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
  //     shuffledAnswers.current.sort(() => Math.random() - 0.5);
  //   }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        // questionText={QUESTIONS[activeQuestionIndex].text}
        // answers={QUESTIONS[activeQuestionIndex].answers}
        // answerState={answerState}
        // selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
      {/* <div id="questions">
        <QuestionTimer
          key={activeQuestionIndex} // key is an atrribute through which any component and be unmount and remount
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        {/* <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClasses = "";

            if (answerState === "answered" && isSelected) {
              cssClasses = "selected";
            }
            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClasses = answerState;
            }
            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClasses}
                >
                  {" "}
                  {answer}
                </button>
              </li>
            );
          })}
        </ul> */}
      {/*<Answer
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].text}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div> */}
    </div>
  );
}
