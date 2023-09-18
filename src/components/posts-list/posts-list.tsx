import { StyleSheet, View } from 'react-native';
import PostCard from '../post-card/post-card';
import { IPostsList } from './type';

const PostsList = ({ postsData }: IPostsList) => {
  return (
    <View style={[styles.mt24, styles.gap4]}>
      {postsData.map(item => (
        <View key={item.id}>
          <PostCard postData={item} />
        </View>
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
