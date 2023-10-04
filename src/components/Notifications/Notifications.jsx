import React from 'react';
import PropTypes from 'prop-types';
// import css from './Notifications.module.css';

export const Notification = ({ message }) => {
  return <p className={css.Notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

Notification.propTypes = {
  message: PropTypes.string,
};
