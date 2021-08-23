import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  height: ${(props) => props.height}px;
  overflow: hidden;
  width: ${(props) => props.width}px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 425px) {
    height: calc(${(props) => props.height}px - 120px);
  }
`;
