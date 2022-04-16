import React from 'react';
import { styled } from '@/stitches.config';

const StyledLink = styled('a', {
  display: 'inline-flex',
  fontSize: '$xsmall',
  color: '$interaction',
});

type Props = {
  link: string;
  children: React.ReactElement;
};

const Link: React.FC<Props> = ({ link, children }) => (
  <StyledLink
    target="_blank"
    rel="noreferrer"
    href={link}
  >
    {children}
  </StyledLink>
);

export default Link;
