import { TFilter } from '../../types';

export type TButtons = {
  text: TFilter;
  onRenderSVG: (color: string) => React.JSX.Element;
}[];
