import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PostCard from '../../components/post-card/post-card';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../apollo/service/get-post';
import { ParamListBase, useTheme } from '@react-navigation/native';
import Header from '../../ui/header/header';

const PostPage = ({ route }: ParamListBase) => {
  const { data, loading } = useQuery(GET_POST, {
    variables: { id: route.params.id },
  });

  if (loading) return <Text>Loading</Text>;

  return (
    <View>
      <Header title={data.post.title || ''} />
      <ScrollView>
        <PostCard postData={data.post} isOpen />
      </ScrollView>
    </View>
  );
};

export default PostPage;
