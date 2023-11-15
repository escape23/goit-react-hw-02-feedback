import { Component } from 'react';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    const total = this.props.total;
    const positivePercentage = this.props.positivePercentage;

    return (
      <div className={styles.stats}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback Percentage: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
