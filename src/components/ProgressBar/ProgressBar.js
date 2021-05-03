/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--border-radius': '4px'
  },

  medium: {
    '--height': 12 + 'px',
    '--border-radius': '4px'
  },

  large: {
    '--height': 16 + 'px',
    '--padding': 4 + 'px',
    '--border-radius': '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return (
    <Wrapper
      style={styles}
      aria-valuenow={value}
      aria-valuemin='0'
      aira-valuemax='100'
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ '--width': value + '%' }} />
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

export default ProgressBar;
