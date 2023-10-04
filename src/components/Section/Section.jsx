import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      {title}
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};
