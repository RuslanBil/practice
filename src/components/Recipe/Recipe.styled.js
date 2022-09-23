import styled from 'styled-components';

export const Card = styled.article`
  display: inline-flex;
  flex-direction: column;
  padding: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
`;

export const RecipeName = styled.h2`
  margin-top: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
`;
export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  /* > svg {
    color: red;
  } */
`;

export const Label = styled.p`
  margin: 0;
`;
