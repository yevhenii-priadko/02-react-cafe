import styles from './VoteStats.module.css';

interface VoteStatsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({ good, neutral, bad, total }) => {
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positivePercentage}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
