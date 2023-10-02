import { TPost } from '../../types';

export interface IPostsListProps {
  postsData: TPost[];
}

export type THandlerCompleted = (posts: {
  data: TPost[];
  pageInfo: { afterCursor: string };
}) => void;
