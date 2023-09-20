type TGetLinkForPhoto = (
  token: string,
  fileName: string,
  fileCategory: 'AVATARS' | 'POSTS',
) => Promise<string>;

export const getLinkForPhoto: TGetLinkForPhoto = async (
  token,
  fileName,
  fileCategory,
) => {
  const uri = `https://internship-social-media.purrweb.com/v1/aws/signed-url?fileName=${fileName}&fileCategory=${fileCategory}`;

  return await fetch(uri, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.text());
};
