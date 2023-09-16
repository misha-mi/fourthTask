import { View, Text, ScrollView, StyleSheet } from 'react-native';
import IconButton from '../../ui/icon-button/icon-button';
import ArrowSVG from '../../assets/svg/arrow-svg';
import TextButton from '../../ui/text-button/text-button';
import ProfileImg from '../../ui/profile-img/profile-img';
import { useTheme } from '@react-navigation/native';
import SettingPersonalInfo from '../../components/setting-personal-info/setting-personal-info';
import { useForm } from 'react-hook-form';
import { TUser } from '../../types';
import RoundButton from '../../ui/round-button/round-button';
import CameraSVG from '../../assets/svg/camera-svg';

const ProfilePage = () => {
  const { color1 } = useTheme().colors.defaultColors;

  const { control, handleSubmit } = useForm<TUser>({
    defaultValues: {
      gender: 'Male',
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton onRenderSVG={color => <ArrowSVG color={color} />} />
          <Text style={{ ...styles.title, color: color1 }}>Profile</Text>
          <TextButton
            text="Done"
            onClick={handleSubmit(data => console.log(data))}
          />
        </View>

        <View style={{ ...styles.jcCenter, position: 'relative' }}>
          <View>
            <ProfileImg />
            <View style={styles.position}>
              <RoundButton
                onRenderSVG={color => <CameraSVG color={color} />}
                size="medium"
              />
            </View>
          </View>
        </View>

        <View style={styles.mt32}>
          <SettingPersonalInfo control={control} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Outfit-SemiBold',
  },
  jcCenter: {
    marginTop: 12,
    alignItems: 'center',
  },
  position: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  mt32: {
    marginTop: 32,
  },
  mt16: {
    marginTop: 16,
  },
});

export default ProfilePage;
