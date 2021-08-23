import styled from 'styled-components';

export const DotIcon = styled.li`
  background: ${(props) => (props.active ? '#03a6a6' : '#a6e8e7')};
  cursor: pointer;
  width: 10px;
  height: 10px;
  margin: 10px;
  transform: rotateZ(45deg);
`;
