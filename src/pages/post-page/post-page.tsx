import { ScrollView, View } from 'react-native';
import PostCard from '../../components/post-card/post-card';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../apollo/service/get-post';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../ui/header/header';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { RootStackParamList } from '../../HOC/navigation/type';
import Spinner from '../../ui/spinner/spinner';
import { useTheme } from '@react-navigation/native';

const PostPage = () => {
  const { pressedButtonColor } = useTheme().colors.myColors.largeButtonColors;
  const route = useRoute<RouteProp<RootStackParamList, 'PostPage'>>();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const { data, loading } = useQuery(GET_POST, {
    variables: { id: route.params.id },
  });

  return (
    <View
      style={{
        flexGrow: 1,
      }}>
      <Header
        title={data?.post.title || 'Loading...'}
        onBack={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        {loading ? (
          <Spinner color={pressedButtonColor} />
        ) : (
          <PostCard postData={data.post} isOpen />
        )}
      </ScrollView>
    </View>
  );
};

export default PostPage;
