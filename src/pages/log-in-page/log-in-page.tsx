import { Dimensions, StyleSheet, View } from 'react-native';
import TitleAuthorization from '../../ui/title-authorization/title-authorization';
import LogInForm from '../../components/forms/log-in-form/log-in-form';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const LogInPage = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const windowHeight = Dimensions.get('window').height;

  const handlerNavigate = () => {
    navigation.navigate('JoinUs');
  };

  return (
    <ScrollView>
      <View style={{ ...styles.wrapper, height: windowHeight }}>
        <TitleAuthorization
          titleText="Log in"
          subtitleText="You will be able to fully communicate"
        />
        <View style={styles.mt40}>
          <LogInForm onNavigate={handlerNavigate} />
        </View>
      </View>
    </ScrollView>
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
