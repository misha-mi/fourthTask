import { ReactElement } from 'react';
import { TSize } from '../../types';

export interface IRoundButton {
  onRenderSVG: (color: string) => ReactElement;
  isCloseButton?: boolean;
  isDisabled?: boolean;
  size: TSize;
  onClick: () => void;
}
