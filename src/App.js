import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Result from "./pages/result/Result";

function App() {
  const [questions, setQuestions] = useState("");
  const [name, setName] = useState(
    localStorage.getItem("playerValueInLocalStorage") || ""
  );
  useEffect(() => {
    localStorage.setItem("playerValueInLocalStorage", name);
  }, [name]);
  // const onChange = (e) => setName(e.target.name);
  const [score, setScore] = useState(0);
  // const [type, setType] = useState("");

  // GET the questions from API
  const fetchQuestions = async (
    category = "",
    difficulty = "",
    type = ""
  ) => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}${type && `&type=${type}`}`
    );
    setQuestions(data.results);
    // console.log(data);
  };
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="Game">
          <Switch>
            <Route
              exact
              path="/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  // type={setType}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route
              exact
              path="/quiz"
              element={
                <Game
                  name={name}
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  // setQuestions={setQuestions}
                />
              }
            />
            <Route
              exact
              path="/result"
              element={<Result name={name} score={score} />}
            />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
