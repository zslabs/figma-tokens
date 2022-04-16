import { styled } from '@/stitches.config';

export const DirtyStateDot = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '2px',
  height: '2px',
  borderRadius: '100%',
  backgroundColor: '$interaction',
});
