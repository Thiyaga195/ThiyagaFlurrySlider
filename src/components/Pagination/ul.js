import styled from 'styled-components';

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  position: absolute;
  bottom: -70;
  left: 0;
  width: 100%;
  justify-content: center;

  @media (max-width: 767px) {
    display: none;
  }
`;
