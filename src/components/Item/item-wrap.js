import styled from 'styled-components';
import itemIcon from '../../images/icon.png';

export const CarouselItems = styled.div`
  width: 80%;
  overflow: hidden;
  padding: 15px;
  background: #174459;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & > .title {
    color: #fff;
    font-family: Myriad Pro;
    font-size: 18px;
    font-weight: normal;
    margin: 0 0 20px 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    ::before {
      content: url(${itemIcon});
      width: 60px;
      padding: 10px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  & > div iframe {
    min-height: 210px;
    @media (max-width: 425px) {
      min-height: auto;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 210px;
  @media (max-width: 425px) {
    min-height: auto;
  }
`;
