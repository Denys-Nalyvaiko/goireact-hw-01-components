import styled from 'styled-components';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background-color: ${({ $hex }) => $hex};
  color: #fafafa;
`;
