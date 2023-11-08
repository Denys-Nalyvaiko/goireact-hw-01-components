import { StatItem } from './StatisticItem.styled';

export const StatisticsItem = ({ label, percentage, hex }) => {
  return (
    <StatItem $hex={hex}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatItem>
  );
};
