import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PostCard from '../../components/post-card/post-card';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../apollo/service/get-post';
import { ParamListBase, useTheme } from '@react-navigation/native';
import IconButton from '../../ui/icon-button/icon-button';
import ArrowSVG from '../../assets/svg/arrow-svg';

const PostPage = ({ route }: ParamListBase) => {
  const { color1 } = useTheme().colors.defaultColors;

  const { data } = useQuery(GET_POST, { variables: { id: route.params.id } });
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.posAbsolute}>
          <IconButton
            onRenderSVG={(color: string) => <ArrowSVG color={color} />}
          />
        </View>
        <Text style={{ color: color1, ...styles.title }}>
          {data?.post.title || 'loading'}
        </Text>
      </View>
      <ScrollView>
        <PostCard postData={data.post} isOpen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  posAbsolute: {
    position: 'absolute',
    left: 16,
    top: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Outfit-SemiBold',
  },
});

export default PostPage;
