import React from 'react';
// import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <div className={css.options}>
      {options.map(option => (
        <button
          className={css.btn}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
