import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className={
      ["card","bg-light"," mb-3",
      props.extraClasses? props.extraClasses: ''].join(" ")}>
      <div className="card-header py-2">
         {props.icon? props.icon: null}
         &nbsp;
         {props.title} </div>
      <div className="card-body">
        {/* <h4 class="card-title">Light card title</h4> */}
        <div className="card-text"> {props.children} </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
  icon: PropTypes.object
};

export default Card;
