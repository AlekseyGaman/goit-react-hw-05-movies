import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  width: 1100px;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const BackLink = styled(Link)`
  width: 80px;
  padding: 10px;
  border-radius: 20px;
  background-color: #dddddd;

  :hover {
    color: #ce4d45;
    background-color: #c4c4c4;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const MainInfo = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
