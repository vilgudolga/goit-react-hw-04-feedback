import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
      <>
          <ul className={styles.list}>
              <li className={styles.text}>Good: {good}</li>
              <li className={styles.text}>Neutral: {neutral}</li>
              <li className={styles.text}>Bad: {bad}</li>
          </ul>

          <p className={styles.text}>Total: {total}</p>
          <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
      </>
  );
};


Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;