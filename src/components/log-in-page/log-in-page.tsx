import { StyleSheet, View } from 'react-native';
import TitleAuthorization from '../../ui/title-authorization/title-authorization';
import LogInForm from '../forms/log-in-form/log-in-form';

const LogInPage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TitleAuthorization
        titleText="Log in"
        subtitleText="You will be able to fully communicate"
      />
      <View style={styles.mt40}>
        <LogInForm onClickRegister={() => navigation.navigate('JoinUs')} />
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
