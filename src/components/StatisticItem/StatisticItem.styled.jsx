import styled from 'styled-components';
import { getRandomHexColor } from './randomHexColor';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background-color: ${getRandomHexColor};
  color: #fafafa;
`;
