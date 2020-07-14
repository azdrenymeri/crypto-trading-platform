import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="uk-card uk-card-small uk-card-default uk-card-hover " style={{ padding: 8 }}>
      <div className="uk-card-header">{ props.title }</div>
      <div className="uk-card-body">
        {  props.children }
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Card;
