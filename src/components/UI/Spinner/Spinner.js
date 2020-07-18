import React from "react";

const Spinner = (props) => {
  return (
    <div className="flex-fill align-self-center">
    <div
    className="bd-highlight align-self-center"  
      style={{ textAlign: "center" }}
      >
      <div
        className="spinner-grow text-primary"
        style={{ height: "4rem", width: "4rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>

    </div>
  );
};

export default Spinner;
