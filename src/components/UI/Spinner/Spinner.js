import React from "react";

const Spinner = (props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <div
        className="spinner-grow"
        style={{ height: "3rem", width: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
