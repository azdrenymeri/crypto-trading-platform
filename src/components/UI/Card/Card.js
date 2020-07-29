import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  // const contentWithBody = (
  //   <div className="card-body">
  //     <div className="card-text"> {props.children} </div>
  //   </div>
  // );

  return (
    <div
      className={[
        "card",
        "bg-light",
        " mb-3",
        "overflow-auto",
        "shadow-sm",
        props.extraClasses ? props.extraClasses : "",
      ].join(" ")}
    >
      {/* <div className="card-header py-2">
        <div className="d-inline-block" id={props.title} data-toggle="dropdown" >{props.icon ? props.icon : null}</div>
        <div className="dropdown-menu" aria-labelledby={props.title}>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Action</a>
        </div>
        <div className="d-inline-block ml-2" style={{ verticalAlign: "middle" }}>
          {" "}
          {props.title}{" "}
        </div>{" "}
      </div> */}

      {props.children}
      {/* {props.renderNoBody ? props.children : contentWithBody} */}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
  icon: PropTypes.object,
  renderNoBody: PropTypes.bool,
};

export default Card;
