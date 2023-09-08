import { ReactElement } from 'react';

export interface ITextWithIconButton {
  onRenderSVG: (color: string) => ReactElement;
  text: string;
  isDisabled?: boolean;
}
