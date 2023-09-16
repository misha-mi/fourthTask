import { TFilter, TPost, TSort } from '../../types';

export interface IPostsList {
  filter: TFilter;
}

export type THandlerCompleted = (posts: {
  data: TPost[];
  pageInfo: { afterCursor: string };
}) => void;
