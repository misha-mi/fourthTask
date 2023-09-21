import { StyleSheet, View } from 'react-native';
import Header from '../../ui/header/header';
import CreatePostForm from '../../components/forms/create-post-form/create-post-form';
import { useNavigation } from '@react-navigation/native';

const CreatePostPage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header title="Create post" onBack={() => navigation.goBack()} />
      <View style={styles.wrapper}>
        <CreatePostForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default CreatePostPage;
