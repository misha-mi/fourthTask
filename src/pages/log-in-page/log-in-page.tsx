import { StyleSheet, View } from 'react-native';
import TitleAuthorization from '../../ui/title-authorization/title-authorization';
import LogInForm from '../../components/forms/log-in-form/log-in-form';
import { NavigationState } from '@react-navigation/native';

const LogInPage = ({ navigation }) => {
  const handlerNavigate = (path: 'JoinUs') => {
    navigation.navigate(path);
  };

  return (
    <View style={styles.wrapper}>
      <TitleAuthorization
        titleText="Log in"
        subtitleText="You will be able to fully communicate"
      />
      <View style={styles.mt40}>
        <LogInForm onNavigate={handlerNavigate} />
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

export default LogInPage;
