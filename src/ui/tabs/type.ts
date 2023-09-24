import { TSort } from '../../types';

export interface ITabs {
  sort: TSort;
  setSort: (sort: TSort) => void;
}
