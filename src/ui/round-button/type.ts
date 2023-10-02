import { ReactElement } from 'react';
import { TSize } from '../../types';

export interface IRoundButtonProps {
  onRenderSVG: (color: string) => ReactElement;
  isCloseButton?: boolean;
  isDisabled?: boolean;
  size: TSize;
  onClick: () => void;
}
