import { TableData } from './TransactionItem.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </tr>
  );
};
