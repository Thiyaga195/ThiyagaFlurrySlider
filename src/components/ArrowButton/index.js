/* eslint-disable react/jsx-props-no-spreading */
/**
 *
 * ArrowButton
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Icon } from './icon';

const dirMap = { left: '135deg', up: '222deg', right: '-45deg', down: '45deg' };

const disabledStyle = { cursor: 'unset', opacity: 0.2 };

function ArrowButton({ direction, disabled, onClick, className }) {
  const clickHandler = () => {
    if (disabled) return;
    onClick(direction);
  };
  return (
    <Icon
      style={disabled ? disabledStyle : {}}
      deg={dirMap[direction]}
      onClick={clickHandler}
      className={className}
    />
  );
}

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right', 'down', 'up']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.any,
};

ArrowButton.defaultProps = {
  direction: 'up',
  disabled: false,
  onClick: () => {},
};

export default memo(ArrowButton);
