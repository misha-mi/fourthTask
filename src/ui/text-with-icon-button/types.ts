import { ReactElement } from 'react';

export interface ITextWithIconButtonProps {
  onRenderSVG: (color: string) => ReactElement;
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
}
