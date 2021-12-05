import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Switch>
          <Route
            exact
            path="/"
            element={
              <QuizForm
                name={name}
                setName={setName}
                amount={setAmount}
                type={setType}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            exact
            path="/quiz"
            element={
              <Quiz
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
        </Switch> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
