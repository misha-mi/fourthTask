import { StyleSheet, View } from 'react-native';
import TitleAuthorization from '../../ui/title-authorization/title-authorization';
import JoinUsForm from '../../components/forms/join-us-form/join-us-form';

const JoinUsPage = ({ navigation }) => {
  const handlerNavigate = (path: 'LogIn' | 'SuccessJoinUsPage') => {
    navigation.navigate(path);
  };

  return (
    <View style={styles.wrapper}>
      <TitleAuthorization
        titleText="Join us"
        subtitleText="You will be able to fully communicate"
      />
      <View style={styles.mt40}>
        <JoinUsForm onNavigate={handlerNavigate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    paddingBottom: 20,
  },
  mt40: {
    marginTop: 40,
  },
});

export default JoinUsPage;
