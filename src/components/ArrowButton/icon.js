import styled from 'styled-components';

export const Icon = styled.span`
  width: 25px;
  height: 25px;
  border: solid #2ca2a6;
  border-width: 0 2px 2px 0;
  display: inline-block;
  transform: rotate(${(props) => props.deg});
  cursor: pointer;
  @media (max-width: 425px) {
    width: 15px;
    height: 15px;
  }
`;
