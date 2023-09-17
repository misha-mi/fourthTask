import { LazyQueryExecFunction, OperationVariables } from '@apollo/client';
import { TGetPost, TPost, TSort } from '../../types';

export interface IGetPostsHOC {
  getPosts: LazyQueryExecFunction<any, OperationVariables>;
  isTabs?: boolean;
}
