import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Categories } from "../../services/Categories";
import Error from "../../components/error/Error";

const Home = ({ name, setName, fetchQuestions }) => {
  // const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !type || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty, type);
      navigate("/quiz");
    }
  };
  return (
    <div>
      {/* I`ll use the QuizForm and some local storage for name and score */}
      <div>
        <div className="settings">
          <span>Quiz Settings</span>
        </div>
        <div>
          {error && <Error>Please Fill all the feilds</Error>}
          <Form className="quiz-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicNoQuestions">
            <Form.Label>Select No of questions</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              custom
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </Form.Control>
          </Form.Group> */}
            <Form.Group controlId="formBasicCategories">
              <Form.Label>Select Category</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                custom
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">Any</option>
                {Categories.map((cat) => (
                  <option key={cat.name + cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
                {/* {quizCategories.map((cat) => {
              <option key={cat.name} value={cat.id}>
                {cat.name}
              </option>;
            })} */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicDifficulty">
              <Form.Label>Select Difficulty</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                custom
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
              >
                <option value="">Any</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Form.Label>Select type of answer</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                custom
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value="">Any</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/Fale</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
