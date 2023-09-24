import { useTheme } from '@react-navigation/native';
import CheckCircleSVG from '../../assets/svg/check-circle-svg';
import CustomButton from '../../ui/custom-button/custom-button';
import { View, Text, StyleSheet } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../../apollo/service/get-user';

const SuccessJoinUsPage = () => {
  const { titleColor, textColor, backgroundColor } =
    useTheme().colors.myColors.successJoinUsColors;

  const [getUser] = useLazyQuery(GET_USER);

  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          styles.title,
          { color: titleColor, backgroundColor: backgroundColor },
        ]}>
        CONGRATS
      </Text>
      <View style={styles.wrapperMessage}>
        <CheckCircleSVG color={backgroundColor} />
        <Text style={{ ...styles.message, color: textColor }}>
          You have been registered
        </Text>
      </View>
      <View style={styles.mt52}>
        <CustomButton title="Continue" onClick={getUser} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    padding: 20,
    paddingBottom: 12,
    paddingTop: 12,
    alignSelf: 'center',
    fontFamily: 'Nokwy',
    fontSize: 55,
    transform: [{ rotate: '-3deg' }],
  },
  wrapperMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 6,
  },
  message: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
  },
  mt52: {
    marginTop: 52,
  },
});

export default SuccessJoinUsPage;
