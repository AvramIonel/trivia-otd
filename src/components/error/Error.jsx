import React from "react";

const Error = ({ children }) => {
  return (
    <div
      style={{
        width: "50%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "#ffc107",
        textAlign: "center",
        justifyContent: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default Error;
