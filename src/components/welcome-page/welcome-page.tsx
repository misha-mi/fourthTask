import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import TextButton from '../../ui/text-button/text-button';
import CustomButton from '../../ui/custom-button/custom-button';

const WelcomePage = () => {
  return (
    <ImageBackground
      source={require('../../assets/img/welcome-bg.jpg')}
      style={styles.background}>
      <View style={styles.position}>
        <Text style={[styles.text, styles.rotate3deg]}>SHARE</Text>
        <Text style={[styles.text, styles.rotate9deg]}>YOUR TALE</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.already}>Already have an account?</Text>
        <TextButton text="Log in" />
      </View>
      <CustomButton title="Create an account" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    padding: 16,
    paddingBottom: 20,
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    gap: 20,
  },
  text: {
    padding: 20,
    paddingBottom: 12,
    paddingTop: 12,
    fontSize: 55,
    textAlign: 'center',
    color: '#131313',
    fontFamily: 'Nokwy',
    backgroundColor: '#B8DE64',
    alignSelf: 'flex-start',
  },
  position: {
    position: 'absolute',
    alignSelf: 'center',
    top: '13.3%',
  },
  rotate3deg: {
    marginLeft: 25,
    transform: [{ rotate: '-3deg' }],
  },
  rotate9deg: {
    transform: [{ rotate: '-9deg' }],
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  already: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default WelcomePage;
