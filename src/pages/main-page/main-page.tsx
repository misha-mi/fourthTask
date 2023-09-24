import { Pressable, StyleSheet, Text, View } from 'react-native';
import ProfileImg from '../../ui/profile-img/profile-img';
import Tapbar from '../../ui/tapbar/tapbar';
import { useState } from 'react';
import { TFilter } from '../../types';
import RoundButton from '../../ui/round-button/round-button';
import PlusSVG from '../../assets/svg/plus-svg';
import GetPostsComponent from '../../components/get-posts-component/get-posts-component';
import { GET_POSTS } from '../../apollo/service/get-posts';
import { GET_FAVORITES_POSTS } from '../../apollo/service/get-favorites-posts';
import { GET_MY_POSTS } from '../../apollo/service/get-my-posts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { GET_USER } from '../../apollo/service/get-user';
import { useQuery } from '@apollo/client';
const Tab = createBottomTabNavigator();

const MainPage = () => {
  const {
    data: {
      userMe: { firstName, avatarUrl },
    },
  } = useQuery(GET_USER);
  const navigation = useNavigation();
  const [filter, setFilter] = useState<TFilter>('main');
  const textTitle =
    filter === 'main'
      ? `Hello ${firstName || 'Anonym'}!`
      : filter.slice(0, 1).toUpperCase() + filter.slice(1);

  const AllPosts = () => {
    return <GetPostsComponent query={GET_POSTS} isTabs />;
  };
  const FavoritePosts = () => {
    return <GetPostsComponent query={GET_FAVORITES_POSTS} />;
  };
  const MyPosts = () => {
    return (
      <>
        <GetPostsComponent query={GET_MY_POSTS} />
        <View style={styles.positions}>
          <RoundButton
            size="large"
            onRenderSVG={color => <PlusSVG color={color} />}
            onClick={() => navigation.navigate('CreatePost')}
          />
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.p16}>
        <View style={styles.header}>
          <Text style={styles.name}>{textTitle}</Text>
          <Pressable onTouchEnd={navigation.toggleDrawer}>
            <ProfileImg userImg={avatarUrl} size="small" />
          </Pressable>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <Tapbar {...props} setFilter={setFilter} />}>
        <Tab.Screen name="MainPosts" component={AllPosts} />
        <Tab.Screen name="FavouritePosts" component={FavoritePosts} />
        <Tab.Screen name="MyPosts" component={MyPosts} />
      </Tab.Navigator>
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
    bottom: 32,
    right: 16,
  },
});

export default MainPage;
