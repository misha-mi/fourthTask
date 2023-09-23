import { View, Text, ScrollView, StyleSheet } from 'react-native';
import IconButton from '../../ui/icon-button/icon-button';
import ArrowSVG from '../../assets/svg/arrow-svg';
import TextButton from '../../ui/text-button/text-button';
import { useNavigation, useTheme } from '@react-navigation/native';
import SettingPersonalInfo from '../../components/setting-personal-info/setting-personal-info';
import { Controller, useForm } from 'react-hook-form';
import { TUser } from '../../types';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../../apollo/service/get-user';
import { EDIT_PROFILE } from '../../apollo/service/edit-profile';
import SetProfileImgComponent from '../../components/set-profile-img-component/set-profile-img-component';
import { getLinkForPhoto } from '../../service/get-link-for-photo';
import { putPhoto } from '../../service/put-photo';

const ProfilePage = () => {
  const { color1 } = useTheme().colors.defaultColors;

  const navigation = useNavigation();

  const [getUserData] = useLazyQuery<{ userMe: TUser }>(GET_USER);
  const [editProfile] = useMutation(EDIT_PROFILE, {
    errorPolicy: 'all',
  });

  const { control, handleSubmit } = useForm<TUser>({
    defaultValues: async () =>
      await getUserData().then(res => res?.data?.userMe),
  });

  const onSubmit = async (dataForm: TUser) => {
    const path = dataForm.avatarUrl;
    const fileName = path.slice(path.lastIndexOf('/') + 1);

    const uriPut = await getLinkForPhoto(fileName, 'AVATARS');

    const res = await fetch(path);
    const blobData = await res.blob();

    const uriPush = await putPhoto(uriPut, blobData);

    editProfile({
      variables: {
        ...dataForm,
        avatarUrl: uriPush,
      },
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton
            onRenderSVG={color => <ArrowSVG color={color} />}
            onClick={navigation.goBack}
          />
          <Text style={{ ...styles.title, color: color1 }}>Profile</Text>
          <TextButton text="Done" onClick={handleSubmit(onSubmit)} />
        </View>

        <View style={styles.jcCenter}>
          <Controller
            control={control}
            name="avatarUrl"
            render={({ field: { onChange, value } }) => (
              <SetProfileImgComponent img={value} setImg={onChange} />
            )}
          />
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
  mt32: {
    marginTop: 32,
  },
  mt16: {
    marginTop: 16,
  },
});

export default ProfilePage;
