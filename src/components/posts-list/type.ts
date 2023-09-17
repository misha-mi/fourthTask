import { TFilter, TPost, TSort } from '../../types';

export interface IPostsList {
  postsIDArr: string[];
  sort: TSort;
  setSort: (sort: TSort) => void;
}

export type THandlerCompleted = (posts: {
  data: TPost[];
  pageInfo: { afterCursor: string };
}) => void;
