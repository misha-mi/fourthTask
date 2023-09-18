import { DocumentNode, LazyQueryExecFunction, OperationVariables } from '@apollo/client';
import { TGetPost, TPost, TSort } from '../../types';

export interface IGetPostsHOC {
  query: DocumentNode;
  isTabs?: boolean;
}
