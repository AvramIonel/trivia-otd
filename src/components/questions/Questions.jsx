import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../components/error/Error";
import { Button } from "react-bootstrap";
import "./questions.css";

// This component is for the GAME page, and gives most of the styles of app and a big part of it`s functionality
const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  // For some style based on the correct answer, used React Bootstrap buttons style - see in css
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };
  // This take care of the score
  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };
  // For quiting the quiz
  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  const navigate = useNavigate();
  // We need this in order to go to the next question and also to set an error if we don`t give any answer
  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1}</h1>
      {error && <Error>Please select one answer</Error>}
      <div className="singleQuestion">
        {questions[currQues] && (
          <h2
            dangerouslySetInnerHTML={{ __html: questions[currQues].question }}
          ></h2>
        )}
        <div className="options">
          {options &&
            options.map((i) => (
              <button
                variant="outline-dark"
                onClick={() => handleCheck(i)}
                className={` singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                <div dangerouslySetInnerHTML={{ __html: i }}></div>
              </button>
            ))}
        </div>
        <div className="controls">
          <Button variant="warning" href="/" onClick={handleQuit}>
            Quit
          </Button>
          <Button variant="success" onClick={handleNext}>
            {currQues > 8 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};
// Used dangerouslySetInnerHTML to get rid of special caracters obtained from the database in my app
export default Question;
