import { useTheme } from '@react-navigation/native';
import CheckCircleSVG from '../../assets/svg/check-circle-svg';
import CustomButton from '../../ui/custom-button/custom-button';
import { View, Text, StyleSheet } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../../apollo/service/get-user';
import { stylesText } from '../../global-styles';

const SuccessJoinUsPage = () => {
  const { titleColor, textColor, backgroundColor } =
    useTheme().colors.myColors.successJoinUsColors;

  const [getUser] = useLazyQuery(GET_USER);

  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          stylesText.nokwy55,
          {
            color: titleColor,
            backgroundColor: backgroundColor,
            alignSelf: 'center',
          },
        ]}>
        CONGRATS
      </Text>
      <View style={styles.wrapperMessage}>
        <CheckCircleSVG color={backgroundColor} />
        <Text style={{ ...stylesText.outfitRegular16, color: textColor }}>
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
  wrapperMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 6,
  },
  mt52: {
    marginTop: 52,
  },
});

export default SuccessJoinUsPage;
