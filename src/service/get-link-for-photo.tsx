import AsyncStorage from '@react-native-async-storage/async-storage';

type TGetLinkForPhoto = (
  fileName: string,
  fileCategory: 'AVATARS' | 'POSTS',
) => Promise<string>;

export const getLinkForPhoto: TGetLinkForPhoto = async (
  fileName,
  fileCategory,
) => {
  const uri = `https://internship-social-media.purrweb.com/v1/aws/signed-url?fileName=${fileName}&fileCategory=${fileCategory}`;

  const token = await AsyncStorage.getItem('token');

  return await fetch(uri, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.text());
};
