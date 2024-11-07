type Leaderboard<T> = {
  position: number;
  value: number;
} & T;

export default Leaderboard;
