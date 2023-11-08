import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  margin-bottom: 24px;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #252525;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  padding: 20px 36px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: rgba(25, 25, 25, 0.5);
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 26px;
  background-color: #cfdce0;
  padding: 20px 32px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Label = styled.span`
  color: rgba(25, 25, 25, 0.5);
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
