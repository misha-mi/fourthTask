import { useState, useEffect } from 'react';
import { THandlerCompleted, TPost, TSort } from '../../types';
import { IGetPostsHOC } from './type';
import { View, Button, ScrollView } from 'react-native';
import Tabs from '../../ui/tabs/tabs';
import PostsList from '../posts-list/posts-list';

const GetPostsComponent = ({ getPosts, isTabs }: IGetPostsHOC) => {
  const [postsIDArr, setPostsIDArr] = useState<string[]>([]);
  const [afterCursor, setAfterCursor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState<TSort>('new');

  const handlerCompleted: THandlerCompleted = ({ data, pageInfo }) => {
    const arrId = data.map(item => item.id);
    setPostsIDArr(state => [...state, ...arrId]);
    setAfterCursor(pageInfo.afterCursor);
    setIsLoading(false);
  };

  const handlerGetPost = (afterCursor: string, sort?: TSort) => {
    getPosts({
      variables: {
        limit: 3,
        afterCursor: afterCursor,
        type: sort?.toUpperCase(),
      },
      onCompleted: data => handlerCompleted(data.posts),
    });
  };

  useEffect(() => {
    setPostsIDArr([]);
    setAfterCursor('');
    handlerGetPost('', sort);
  }, [sort]);

  const showTabs = isTabs ? (
    <View style={{ padding: 16 }}>
      <Tabs sort={sort} setSort={setSort} />
    </View>
  ) : null;

  return (
    <ScrollView>
      {showTabs}
      <PostsList postsIDArr={postsIDArr} sort={sort} setSort={setSort} />
      <Button title="more" onPress={() => handlerGetPost(afterCursor, sort)} />
    </ScrollView>
  );
};

export default GetPostsComponent;
