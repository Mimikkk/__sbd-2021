import styled from 'styled-components';
import React, { VFC } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface Props {
  shouldRotate: boolean;
}

const Rotate = styled.div<Props>`
  align-content: center;
  display: flex;
  transition: all 0.1s ease-out;
  transform: ${({ shouldRotate }) =>
    shouldRotate ? `rotate(90deg)` : undefined};
`;

export const RotatingArrow: VFC<Props> = ({ shouldRotate }) => (
  <Rotate shouldRotate={shouldRotate}>
    <ArrowRightIcon />
  </Rotate>
);
