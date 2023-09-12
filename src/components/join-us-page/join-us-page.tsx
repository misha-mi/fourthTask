import { StyleSheet, View } from 'react-native';
import AlreadyHave from '../../ui/alredy-have/alredy-have';
import CustomButton from '../../ui/custom-button/custom-button';
import TitleAuthorization from '../../ui/title-authorization/title-authorization';
import Input from '../../ui/input/input';

const JoinUsPage = () => {
  return (
    <View style={styles.wrapper}>
      <TitleAuthorization
        titleText="Join us"
        subtitleText="You will be able to fully communicate"
      />
      <View style={styles.gap16}>
        <Input
          label="E-mail"
          placeholder="Enter your e-mail"
          status="waiting"
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          status="waiting"
        />
        <Input
          label="Confirm password"
          placeholder="Confirm your password"
          status="waiting"
        />
      </View>

      <View style={styles.mt91}>
        <AlreadyHave />
      </View>

      <View style={styles.mt20}>
        <CustomButton title="Continue" />
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
  gap16: {
    gap: 16,
    marginTop: 40,
  },
  mt91: {
    marginTop: 91,
  },
  mt20: {
    marginTop: 20,
  },
});

export default JoinUsPage;
