import {ImageBackground, StyleSheet, View} from 'react-native';
import DeleteButton from './ui/delete-button/delete-button';
import ProfileImg from './ui/profile-img/profile-img';
import CustomButton from './ui/custom-button/custom-button';

const Index = () => {
  return (
    <ImageBackground
      source={require('./assets/img/welcome-bg.jpg')}
      style={styles.wrapper}>
      <View style={styles.container}>
        <CustomButton title="Create an account" />
        <CustomButton title="Create an account" status="loading" />
        <CustomButton title="Create an account" status="disabled" />
        <View style={styles.wrapperMedium}>
          <CustomButton title="Create an account" size="medium" />
          <CustomButton
            title="Create an account"
            status="loading"
            size="medium"
          />
          <CustomButton
            title="Create an account"
            status="disabled"
            size="medium"
          />
          <CustomButton title="Error" size="medium" isRedText />
        </View>
      </View>
      {/* <ProfileImg size="large" /> */}
      {/* <DeleteButton /> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
    // fontFamily: "Outfit-SemiBold"
  },
  container: {
    width: 343,
    alignItems: 'stretch',
  },
  wrapperMedium: {
    borderRadius: 22,
    overflow: 'hidden',
  },
});

export default Index;
