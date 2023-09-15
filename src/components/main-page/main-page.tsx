import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProfileImg from '../../ui/profile-img/profile-img';
import Tabs from '../../ui/tabs/tabs';
import PostCard from '../post-card/post-card';
import Tapbar from '../../ui/tapbar/tapbar';
import { useState } from 'react';
import { TFilter, TSort } from '../../types';
import { IMainPage } from './type';
import RoundButton from '../../ui/round-button/round-button';
import PlusSVG from '../../assets/svg/plus-svg';
import NoPosts from '../../ui/no-posts/no-posts';

const MainPage = ({ navigation }: IMainPage) => {
  const [sort, setSort] = useState<TSort>('new');
  const [filter, setFilter] = useState<TFilter>('main');

  const textTitle =
    filter === 'main'
      ? 'Hello John!'
      : filter.slice(0, 1).toUpperCase() + filter.slice(1);

  let noPostsMessage: String;

  switch (filter) {
    case 'favorites':
      noPostsMessage = "You haven't added anything to your favorites yet";
      break;
    case 'my posts':
      noPostsMessage = "You haven't posted any posts yet";
      break;
    case 'main':
      noPostsMessage = 'Sorry there is not a single post';
      break;
  }

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

        {!false ? (
          <>
            <View style={styles.p16}>
              <Tabs sort={sort} setSort={setSort} />
            </View>

            <View style={styles.posts}>
              <PostCard />
              <PostCard />
              <PostCard />
            </View>
          </>
        ) : (
          <NoPosts message={noPostsMessage} />
        )}
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
  posts: {
    marginTop: 24,
    gap: 4,
  },
  positions: {
    position: 'absolute',
    bottom: 100,
    right: 16,
  },
});

export default MainPage;
