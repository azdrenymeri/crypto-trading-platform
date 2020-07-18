import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const contentWithBody = (
    <div className="card-body">
    <div className="card-text"> {props.children} </div>
  </div>
  );

  return (
    <div className={
      ["card","bg-light"," mb-3","overflow-auto","shadow-sm",
      props.extraClasses? props.extraClasses: ''].join(" ")}>
      <div className="card-header py-2">
         {props.icon? props.icon: null}
         &nbsp;
         {props.title} </div>

         {(props.renderNoBody) ? props.children : contentWithBody}

    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
  icon: PropTypes.object,
  renderNoBody: PropTypes.bool
};

export default Card;
