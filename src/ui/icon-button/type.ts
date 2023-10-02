import { ReactElement } from 'react';
import { TStatus } from '../../types';

export interface IIconButtonProps {
  status?: TStatus;
  onRenderSVG: (color: string) => ReactElement;
  isActive?: boolean;
  onClick: () => void;
}
