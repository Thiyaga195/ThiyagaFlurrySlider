import styled from 'styled-components';

export const InnerWrapper = styled.div`
  height: 100%;
  width: ${(props) => props.width}px;
  position: absolute;
  left: 0;
  top: 0;
  transition-property: left;
  transition-duration: 0.4s;
  transition-delay: 0.2s;
  display: -webkit-flex;
  display: flex;
`;
