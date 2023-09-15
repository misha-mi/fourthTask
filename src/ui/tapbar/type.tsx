import { TFilter } from '../../types';

export interface ITapbar {
  filter: TFilter;
  setFilter: (filter: TFilter) => void;
}

export type TButtons = {
  text: TFilter;
  onRenderSVG: (color: string) => React.JSX.Element;
}[];
