import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  height: ${(props) => props.height}px;
  overflow: hidden;
  width: ${(props) => props.width}px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
`;
