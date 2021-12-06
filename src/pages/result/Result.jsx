import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Result = ({ name, score }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);
  return (
    <div
      style={
        ({ display: "flex" },
        { flexDirection: "column" },
        { justifyContent: "space-around" },
        { alignItems: "center" },
        { padding: "20px" })
      }
    >
      <span style={({ alignItems: "center" }, { padding: "15px" })}>
        Final Score: {score}
      </span>
      <Button variant="primary" href="/">
        Go to Home Page
      </Button>
    </div>
  );
};

export default Result;
