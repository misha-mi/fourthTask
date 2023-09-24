import { ReactElement } from 'react';

export interface IVerticalSlider {
  data: string[];
  value: string;
  setValue: (value: string) => void;
  alignItemValue: 'center' | 'flex-end' | 'flex-start';
}

export type THandlerRenderItem = (item: string, index: number) => ReactElement;
