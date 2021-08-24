import styled from 'styled-components';

export const Title = styled.h2`
  margin: 20px 0 0px 60px;
  font-size: 22px;
  color: #1e2c49;

  @media (max-width: 425px) {
    width: 65%;
    font-size: 17px;
    margin: 20px 0 20px 20px;
  }
  @media (min-width: 640px) and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
