import { ReactElement } from 'react';
import { TStatus } from '../../types';

export interface IIconButton {
  status?: TStatus;
  onRenderSVG: (color: string) => ReactElement;
}
