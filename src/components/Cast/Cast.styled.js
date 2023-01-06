import styled from 'styled-components';

export const CastList = styled.ul`
  justify-content: center;
  list-style: none;
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 380px 380px 380px 380px;
  gap: 20px 30px;
  grid-template-areas:
    '. . . .'
    '. . . .'
    '. . . .';
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
