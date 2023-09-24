import { useState, ReactElement } from 'react';
import { TSort } from '../../types';
import { IGetPostsHOC } from './type';
import {
  View,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Tabs from '../../ui/tabs/tabs';
import PostsList from '../posts-list/posts-list';
import { useQuery } from '@apollo/client';
import NoPosts from '../../ui/no-posts/no-posts';
import Spinner from '../../ui/spinner/spinner';
import { useTheme } from '@react-navigation/native';

const GetPostsComponent = ({ query, isTabs, noPostsMessage }: IGetPostsHOC) => {
  const { color1 } = useTheme().colors.myColors.defaultColors;
  const [sort, setSort] = useState<TSort>('new');
  const [paginationLoading, setPaginationLoading] = useState(false);

  const { data, loading, fetchMore } = useQuery(query, {
    variables: { limit: 3, type: sort.toUpperCase() },
    errorPolicy: 'all',
  });

  const handlerFetchMore = (afterCursor: string, sort?: TSort) => {
    if (afterCursor && !paginationLoading) {
      setPaginationLoading(true);
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
      }).then(() => setPaginationLoading(false));
    }
  };

  const handlerScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    if (contentOffset.y + layoutMeasurement.height + 2 > contentSize.height) {
      handlerFetchMore(data.posts.pageInfo.afterCursor, sort);
    }
  };

  const showTabs = isTabs ? (
    <View style={{ padding: 16 }}>
      <Tabs sort={sort} setSort={setSort} />
    </View>
  ) : null;

  let showContent: ReactElement;

  if (!loading) {
    if (data.posts.data.length) {
      showContent = <PostsList postsData={data.posts.data} />;
    } else {
      showContent = <NoPosts message={noPostsMessage || ''} />;
    }
  } else {
    showContent = <Spinner color={color1} />;
  }

  return (
    <ScrollView
      contentContainerStyle={
        !data?.posts.data.length && !loading
          ? { flexGrow: 1, justifyContent: 'center' }
          : {}
      }
      onScroll={handlerScroll}>
      {showTabs}

      {showContent}
    </ScrollView>
  );
};

export default GetPostsComponent;
