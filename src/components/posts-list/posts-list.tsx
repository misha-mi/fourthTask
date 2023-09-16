import { Button, StyleSheet, View } from 'react-native';
import PostCard from '../post-card/post-card';
import { useLazyQuery } from '@apollo/client';
import { GET_POSTS } from '../../apollo/service/get-posts';
import { useEffect, useState } from 'react';
import { TPost, TSort } from '../../types';
import { IPostsList, THandlerCompleted } from './type';
import Tabs from '../../ui/tabs/tabs';

const PostsList = ({ filter }: IPostsList) => {
  const [postsData, setPostsData] = useState<TPost[]>([]);
  const [afterCursor, setAfterCursor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState<TSort>('new');

  const handlerCompleted: THandlerCompleted = ({ data, pageInfo }) => {
    setPostsData(state => [...state, ...data]);
    setAfterCursor(pageInfo.afterCursor);
    setIsLoading(false);
  };

  const [posts] = useLazyQuery(GET_POSTS, {
    variables: { type: sort.toUpperCase() },
    onCompleted: data => handlerCompleted(data.posts),
  });

  const handlerGetPost = (afterCursor: string, sort: TSort) => {
    posts({
      variables: {
        limit: 3,
        afterCursor: afterCursor,
        type: sort.toUpperCase(),
      },
    });
  };

  useEffect(() => {
    setPostsData([]);
    setAfterCursor('');
    handlerGetPost('', sort);
  }, [sort]);

  const showTabs =
    filter === 'main' ? (
      <View style={styles.p16}>
        <Tabs sort={sort} setSort={setSort} />
      </View>
    ) : null;

  return (
    <View>
      {showTabs}
      <View style={[styles.gap4, styles.mt24]}>
        {postsData.map(item => (
          <View key={item.id}>
            <PostCard dataPost={item} />
          </View>
        ))}

        <Button
          title="more"
          onPress={() => handlerGetPost(afterCursor, sort)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt24: {
    marginTop: 24,
  },
  gap4: {
    gap: 4,
  },
  p16: {
    padding: 16,
  },
});

export default PostsList;
