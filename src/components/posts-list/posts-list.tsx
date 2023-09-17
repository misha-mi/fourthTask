import { StyleSheet, Text, View } from 'react-native';
import PostCard from '../post-card/post-card';
import { IPostsList } from './type';
import { Suspense } from 'react';

const PostsList = ({ postsIDArr, sort, setSort }: IPostsList) => {
  return (
    <View style={[styles.mt24, styles.gap4]}>
      {postsIDArr.map(id => (
        <Suspense
          key={id}
          fallback={<Text style={{ color: 'red' }}>Loading...</Text>}>
          <PostCard postID={id} />
        </Suspense>
      ))}
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
});

export default PostsList;
