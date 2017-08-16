import styled from 'styled-components';

export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListChild = styled.li`
  border-bottom: 1px solid #CCC;
  padding: .5rem 0;
  font-size: 1rem;
  display: flex;
`

export const ListBtn = styled.button`
  border: 1px solid #f8bbd0;
  font-size: 1rem;
  background: #FFF;
  color: #f8bbd0;
  border-radius: 50%;
  margin: 0 1rem;
  justify-content: flex-end;
`

export const ListText = styled.div`
  width: 100%;
  justify-content: flex-start;
`
