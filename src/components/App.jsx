import {useState} from 'react';
import React from 'react';

import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Notifications from './Notifications/Notifications';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        throw new Error();
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = Object.keys({good, neutral, bad});

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notifications message='There is not feedback' />
        )}
      </Section>
    </>
  );
};