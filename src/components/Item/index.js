/* eslint-disable jsx-a11y/media-has-caption */
/**
 *
 * Item
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { ItemWrapper } from './item-wrapper';
import { CarouselItems, Image } from './item-wrap';

function Item({ item, width }) {
  const { source, isVideo, title } = item;
  const videonReady = (event) => event.target.pauseVideo();
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <ItemWrapper width={width}>
      <CarouselItems>
        <p className="title">{title}</p>
        {isVideo ? (
          <YouTube videoId={source} opts={opts} onReady={videonReady} />
        ) : (
          <a href={source} target="_blank">
            <Image src={source} alt="" />
          </a>
        )}
      </CarouselItems>
    </ItemWrapper>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    source: PropTypes.string.isRequired,
    isVideo: false,
    title: PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.number,
};

export default memo(Item);
