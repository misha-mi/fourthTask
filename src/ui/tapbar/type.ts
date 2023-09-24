import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TFilter } from '../../types';

export type ITapbar = BottomTabBarProps & {
  setFilter: (string: TFilter) => void;
};

export type TButtons = {
  text: TFilter;
  onRenderSVG: (color: string) => React.JSX.Element;
}[];
