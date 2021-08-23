/**
 *
 * Carousel
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from '../Item';
import { CarouselWrapper } from './carousel-wrapper';
import { InnerWrapper } from './inner-wrapper';
import Pagination from '../Pagination';
import ArrowButton from '../ArrowButton';

const LeftArrow = styled(ArrowButton)`
  position: absolute;
  left: -20px;
  top: 40%;
  margin-top: -20px;
`;
const RightArrow = styled(ArrowButton)`
  position: absolute;
  right: -20px;
  top: 40%;
  margin-top: -20px;
`;

function Carousel({ items, itemPerPage, width, speed, height }) {
  const [state, setState] = useState({ left: 0, page: 0 });
  const itemWidth = Math.trunc(width / itemPerPage);
  const totalWidth = itemWidth * items.length;
  const totalPage = Math.ceil(items.length / itemPerPage);

  const goToPage = (page) => {
    let left = page * itemWidth * itemPerPage;

    if (page === totalPage - 1) {
      left = totalWidth - itemWidth * itemPerPage;
    }
    setState({ page, left });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const page = state.page >= totalPage - 1 ? 0 : state.page + 1;
      goToPage(page);
    }, speed);
    return () => clearInterval(timer);
  }, [itemPerPage, state, speed]);

  return (
    <CarouselWrapper
      width={width}
      height={height}
      style={{ overflow: 'unset' }}
    >
      <CarouselWrapper width={width} height={height}>
        <InnerWrapper style={{ left: `-${state.left}px` }} width={totalWidth}>
          {items.map((item) => (
            <Item key={item.id} item={item} width={itemWidth} />
          ))}
        </InnerWrapper>
        <Pagination
          count={totalPage}
          active={state.page}
          onClick={(page) => goToPage(page)}
        />
      </CarouselWrapper>

      <LeftArrow
        direction="left"
        disabled={state.page === 0}
        onClick={() => goToPage(state.page - 1 < 0 ? 0 : state.page - 1)}
      />
      <RightArrow
        direction="right"
        disabled={state.page >= totalPage - 1}
        onClick={() =>
          goToPage(state.page + 1 === totalPage ? 0 : state.page + 1)
        }
      />
    </CarouselWrapper>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      isVideo: PropTypes.bool,
    }).isRequired,
  ),
  itemPerPage: PropTypes.number,
  width: PropTypes.number,
  speed: PropTypes.number,
  height: PropTypes.number,
};

Carousel.defaultProps = {
  items: [],
  itemPerPage: 3,
  width: 1050,
  speed: 5000,
  height: 390,
};

export default memo(Carousel);