import { StatItem } from './StatisticItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatItem>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatItem>
  );
};
