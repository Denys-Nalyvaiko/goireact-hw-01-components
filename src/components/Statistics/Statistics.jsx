import { StatisticsItem } from 'components/StatisticItem/StatisticItem';
import { StatisticContainer, StatsList, Title } from './Statistics.styled';
import { getRandomHexColor } from './randomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticContainer>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            label={label}
            percentage={percentage}
            hex={getRandomHexColor()}
          />
        ))}
      </StatsList>
    </StatisticContainer>
  );
};
