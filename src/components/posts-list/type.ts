import { TFilter, TPost, TSort } from '../../types';

export interface IPostsList {
  postsIDArr: string[];
}

export type THandlerCompleted = (posts: {
  data: TPost[];
  pageInfo: { afterCursor: string };
}) => void;
