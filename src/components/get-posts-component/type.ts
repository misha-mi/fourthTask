import { DocumentNode } from '@apollo/client';
import { TFilter } from '../../types';

export interface IGetPostsHOC {
  query: DocumentNode;
  isTabs?: boolean;
  noPostsMessage?: string;
}
