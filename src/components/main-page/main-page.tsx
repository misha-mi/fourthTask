import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProfileImg from '../../ui/profile-img/profile-img';
import Tabs from '../../ui/tabs/tabs';
import PostCard from '../post-card/post-card';
import Tapbar from '../../ui/tapbar/tapbar';

const MainPage = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView>
        <View style={styles.p16}>
          <View style={styles.header}>
            <Text style={styles.name}>Hello John!</Text>
            <ProfileImg userImg="../../assets/img/user.png" size="small" />
          </View>

          <Tabs />
        </View>

        <View style={styles.posts}>
          <PostCard />
          <PostCard />
          <PostCard />
        </View>
      </ScrollView>

      <Tapbar />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default MainPage;
