import styled from 'styled-components'

const TableLayout = styled.table`
  width: 95%;
  margin: 24px auto;
  text-align: left;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid grey;
`

const Header = styled.th`
  font-weight: 600;
  height: 40px;
  padding-left: 24px;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`

const ColumnWrapper = styled.td`
  padding-left: 24px;
  height: 100%
`

const Column = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  width: 100%;
  padding-right: 14px;
`

const Row = styled.tr<{ isOdd?: boolean }>`
  padding-right: 12px;
  height: 32px;
  verfical-align: middle;

  ${(({ isOdd }) => isOdd && 'background-color: lightgrey;')}
`

export { Column, Row, Header, TableLayout, ColumnWrapper }