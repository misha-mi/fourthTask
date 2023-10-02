import { DocumentNode } from '@apollo/client';

export interface IGetPostsHOCProps {
  query: DocumentNode;
  isTabs?: boolean;
  noPostsMessage?: string;
}
