import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Question from "../../components/questions/Questions";
import "./game.css";

// This page is what the user see in the game - all the data the users sees is from virtual DOM - nothing is hardcoded
const Game = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    if (questions && questions.length > 0) {
      setOptions(
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
      );
    }
  }, [currQues, questions]);

  // Here we shuffle the answers so the correct answer it has a random position everytime
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues]?.category}</span>
            <span>Score: {score}</span>
          </div>

          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
};

export default Game;
