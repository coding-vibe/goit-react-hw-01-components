import styled from 'styled-components';

export const Table = styled.table`
  width: 75%;
  margin: 0 auto;
  border-collapse: collapse;

  box-shadow: -8px 1px 46px -18px rgba(0, 0, 0, 0.5);
`

export const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;

  background-color: #00BCD5;

  color: #FFFFFF;
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
`

export const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;

  color: #757A7E;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #e5e5e5;
  }
`
