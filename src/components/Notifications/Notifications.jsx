import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notifications.module.css';

const Notification = ({ message }) => {
  return (
      <p className={styles.paragraph}>{message}</p>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
