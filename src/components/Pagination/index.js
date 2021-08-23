/**
 *
 * Pagination
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Ul } from './ul';
import { DotIcon } from './dot-icon';

function Pagination({ active, count, onClick }) {
  const items = [...Array(count).keys()];
  return (
    <Ul className="dots">
      {items.map((item) => (
        <DotIcon
          key={item}
          active={active === item}
          onClick={() => onClick(item)}
        />
      ))}
    </Ul>
  );
}

Pagination.propTypes = {
  active: PropTypes.number,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Pagination.defaultProps = {
  active: 0,
  onClick: () => {},
};

export default memo(Pagination);
