import styled from 'styled-components';

export const MovieUl = styled.ul`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-template-rows: 500px 500px 500px 500px;
  gap: 20px 30px;
  grid-template-areas:
    '. . . .'
    '. . . .'
    '. . . .';
`;

export const MovieItem = styled.li`
  & a {
    & p {
      font-weight: 600;
    }
    & img {
      margin-bottom: 10px;
    }
  }
`;
