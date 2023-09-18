import { useState, useEffect } from 'react';
import { THandlerCompleted, TPost, TSort } from '../../types';
import { IGetPostsHOC } from './type';
import { View, Button, ScrollView } from 'react-native';
import Tabs from '../../ui/tabs/tabs';
import PostsList from '../posts-list/posts-list';
import { useQuery } from '@apollo/client';

const GetPostsComponent = ({ query, isTabs }: IGetPostsHOC) => {
  const [sort, setSort] = useState<TSort>('new');

  const { data, loading, fetchMore } = useQuery(query, {
    variables: { limit: 3, type: sort.toUpperCase() },
    errorPolicy: 'all',
  });
  const postsIDArr = !loading ? data.posts.data.map(item => item.id) : [];

  const handlerFetchMore = (afterCursor: string, sort?: TSort) => {
    if (afterCursor) {
      fetchMore({
        variables: {
          limit: 3,
          afterCursor: afterCursor,
          type: sort?.toUpperCase(),
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.posts.data = [
            ...prevResult.posts.data,
            ...fetchMoreResult.posts.data,
          ];
          return fetchMoreResult;
        },
      });
    }
  };

  const showTabs = isTabs ? (
    <View style={{ padding: 16 }}>
      <Tabs sort={sort} setSort={setSort} />
    </View>
  ) : null;

  return (
    <ScrollView>
      {showTabs}
      <PostsList postsIDArr={postsIDArr} />
      <Button
        title="more"
        onPress={() => handlerFetchMore(data.posts.pageInfo.afterCursor, sort)}
      />
    </ScrollView>
  );
};

export default GetPostsComponent;
