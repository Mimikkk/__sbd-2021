import styled from 'styled-components';
import { VFC } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface Props {
  rotate: boolean;
}

const Rotate = styled.div`
  align-content: center;
  display: flex;
  transition: all 0.1s ease-out;
  transform: ${({ rotate }: Props) => (rotate ? `rotate(90deg)` : '')};
`;

export const RotatingArrow: VFC<Props> = ({ rotate }) => (
  <Rotate rotate={rotate} children={<ArrowRightIcon />} />
);
