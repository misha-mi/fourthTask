import { ScrollView, Text, View } from 'react-native';
import PostCard from '../../components/post-card/post-card';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../apollo/service/get-post';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../ui/header/header';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { RootStackParamList } from '../../HOC/navigation/type';

const PostPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'PostPage'>>();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const { data, loading } = useQuery(GET_POST, {
    variables: { id: route.params.id },
  });

  if (loading) return <Text>Loading</Text>;

  return (
    <View>
      <Header
        title={data.post.title || ''}
        onBack={() => navigation.goBack()}
      />
      <ScrollView>
        <PostCard postData={data.post} isOpen />
      </ScrollView>
    </View>
  );
};

export default PostPage;
