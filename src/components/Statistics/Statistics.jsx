import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={css.stat}>
      <li className={css.stat_item}>Good: {good}</li>
      <li className={css.stat_item}>Neutral: {neutral}</li>
      <li className={css.stat_item}>Bad: {bad}</li>
      <li className={css.stat_item}>Total: {total}</li>
      <li className={css.stat_item}>Positive Feedback: {positive} %</li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};
