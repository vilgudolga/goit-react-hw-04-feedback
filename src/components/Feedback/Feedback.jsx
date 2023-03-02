import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
      <>
          {options.map(option => (
              <button
                  className={styles.button}
                  key={option}
                  type="button"
                  onClick={() => onLeaveFeedback(option)}
              >
                  {option}
              </button>
          ))}
      </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
