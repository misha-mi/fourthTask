import { TSort } from '../../types';

export interface ITabsProps {
  sort: TSort;
  setSort: (sort: TSort) => void;
}
