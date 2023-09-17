import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProfileImg from '../../ui/profile-img/profile-img';
import Tapbar from '../../ui/tapbar/tapbar';
import { useState } from 'react';
import { TFilter } from '../../types';
import RoundButton from '../../ui/round-button/round-button';
import PlusSVG from '../../assets/svg/plus-svg';
import GetPostsHoc from '../../components/get-posts-component/get-posts-component';
import { useLazyQuery } from '@apollo/client';
import { GET_POSTS } from '../../apollo/service/get-posts';
import { GET_FAVORITES_POSTS } from '../../apollo/service/get-favorites-posts';
import { GET_MY_POSTS } from '../../apollo/service/get-my-posts';

const MainPage = () => {
  const [filter, setFilter] = useState<TFilter>('main');

  const textTitle =
    filter === 'main'
      ? 'Hello John!'
      : filter.slice(0, 1).toUpperCase() + filter.slice(1);

  const [posts] = useLazyQuery(GET_POSTS);
  const [favouritePosts] = useLazyQuery(GET_FAVORITES_POSTS);
  const [myPosts] = useLazyQuery(GET_MY_POSTS);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.p16}>
          <View style={styles.header}>
            <Text style={styles.name}>{textTitle}</Text>
            <ProfileImg userImg="../../assets/img/user.png" size="small" />
          </View>
        </View>

        <GetPostsHoc getPosts={posts} isTabs />
      </ScrollView>

      {filter === 'my posts' ? (
        <View style={styles.positions}>
          <RoundButton
            size="large"
            onRenderSVG={color => <PlusSVG color={color} />}
          />
        </View>
      ) : null}

      <Tapbar filter={filter} setFilter={setFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  p16: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Outfit-Medium',
    fontSize: 32,
    color: 'white',
  },
  positions: {
    position: 'absolute',
    bottom: 100,
    right: 16,
  },
});

export default MainPage;
