import React from 'react';
import PropTypes from 'prop-types';
// import css from './Notifications.module.css';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
