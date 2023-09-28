import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import CustomButton from '../../ui/custom-button/custom-button';
import IfMessage from '../../ui/if-message/if-message';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { stylesText } from '../../global-styles';
import { useTheme } from '@react-navigation/native';

const WelcomePage = () => {
  const { titleColor, backgroundColor } =
    useTheme().colors.myColors.noPostsColors;
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <ImageBackground
      source={require('../../assets/img/welcome-bg.jpg')}
      style={styles.background}>
      <View style={styles.position}>
        <Text
          style={[
            stylesText.nokwy55,
            styles.ml25,
            {
              color: titleColor,
              backgroundColor: backgroundColor,
              alignSelf: 'flex-start',
            },
          ]}>
          SHARE
        </Text>
        <Text
          style={[
            stylesText.nokwy55,
            styles.rotate9deg,
            { color: titleColor, backgroundColor: backgroundColor },
          ]}>
          YOUR TALE
        </Text>
      </View>
      <IfMessage
        ifMessage="Already have an account?"
        thenMessage="Log in"
        onClick={() => navigation.navigate('LogIn')}
      />
      <CustomButton
        title="Create an account"
        onClick={() => navigation.navigate('JoinUs')}
      />
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
  position: {
    position: 'absolute',
    alignSelf: 'center',
    top: '13.3%',
  },
  ml25: {
    marginLeft: 25,
  },
  rotate9deg: {
    transform: [{ rotate: '-9deg' }],
  },
});

export default WelcomePage;
