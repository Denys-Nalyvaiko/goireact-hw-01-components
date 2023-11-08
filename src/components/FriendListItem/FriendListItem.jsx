import { FriendItem, Status, Name } from './FriendListItem.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status $isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};
