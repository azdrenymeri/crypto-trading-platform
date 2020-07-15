import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div class="card bg-light mb-3 ">
      <div class="card-header py-2">
         {props.icon? props.icon: null}
         &nbsp;
         {props.title} </div>
      <div class="card-body">
        {/* <h4 class="card-title">Light card title</h4> */}
        <p class="card-text"> {props.children} </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Card;
