import { StyleSheet, View } from 'react-native';
import Header from '../../ui/header/header';
import Upload from '../../ui/upload/upload';
import Input from '../../ui/input/input';
import CustomButton from '../../ui/custom-button/custom-button';
import CreatePostForm from '../../components/forms/create-post-form/create-post';

const CreatePostPage = () => {
  return (
    <View>
      <Header title="Create post" />
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
