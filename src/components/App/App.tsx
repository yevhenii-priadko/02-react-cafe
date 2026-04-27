import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import type { Votes, VoteType } from '../../types/votes';

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType): void => {
    setVotes((prev: Votes) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetVotes = (): void => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const total = votes.good + votes.neutral + votes.bad;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={total > 0}
      />
      {total === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <VoteStats
          good={votes.good}
          neutral={votes.neutral}
          bad={votes.bad}
          total={total}
        />
      )}
    </div>
  );
}

export default App;
