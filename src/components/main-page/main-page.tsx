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

const MainPage = ({ navigation }: IMainPage) => {
  const [sort, setSort] = useState<TSort>('new');
  const [filter, setFilter] = useState<TFilter>('main');

  const textTitle =
    filter === 'main'
      ? 'Hello John!'
      : filter.slice(0, 1).toUpperCase() + filter.slice(1);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.p16}>
          <View style={styles.header}>
            <Text style={styles.name}>{textTitle}</Text>
            <ProfileImg userImg="../../assets/img/user.png" size="small" />
          </View>

          <Tabs sort={sort} setSort={setSort} />
        </View>

        <View style={styles.posts}>
          <PostCard />
          <PostCard />
          <PostCard />
        </View>
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
    marginBottom: 40,
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
