import React from 'react';
import { data } from './data';
import { useWindowSize } from '../../hooks/useWindowSize';
import Carousel from '../../components/Carousel';
import { Title } from '../../components/Title';

export const HomePage = () => {
  const [width] = useWindowSize();
  const effectiveWidth = width - (width * 10) / 100;
  let itemPerPage = 3;
  if (width < 768) {
    itemPerPage = 1;
  } else if (width < 992) {
    itemPerPage = 2;
  }
  return (
    <>
      <Title>They are talking about Flurry</Title>
      <Carousel
        items={data}
        width={effectiveWidth}
        itemPerPage={itemPerPage}
        speed={500000}
        height={320}
      />
    </>
  );
};

export default HomePage;
