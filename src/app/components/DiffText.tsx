import React from 'react';
import { styled } from '@/stitches.config';

const StyledDiff = styled('div', {
  padding: '$2',
  fontWeight: '$bold',
  wordBreak: 'break-all',
  borderRadius: '$default',
  fontSize: '$xsmall',
  variants: {
    type: {
      addition: {
        backgroundColor: '$successBg',
        color: '$successFg',
      },
      deletion: {
        backgroundColor: '$dangerBg',
        color: '$dangerFg',
      },
    },
  },
});

type Props = {
  type: 'addition' | 'deletion';
  children: React.ReactElement;
};

const DiffText: React.FC<Props> = ({ type, children }) => (
  <StyledDiff
    type={type}
  >
    {children}
  </StyledDiff>
);

export default DiffText;
