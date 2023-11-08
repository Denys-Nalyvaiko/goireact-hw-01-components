import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 78px 10px 10px;
  background-color: #fafafa;
  border: 2px solid #252525;
  border-radius: 10px;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
