import { getLinkForPhoto } from '../service/get-link-for-photo';
import { putPhoto } from '../service/put-photo';

type TPostPhoto = (path: string, type: 'POSTS' | 'AVATARS') => Promise<string>;

export const postPhoto: TPostPhoto = async (path, type) => {
  const fileName = path.slice(path.lastIndexOf('/') + 1);

  const uriPut = await getLinkForPhoto(fileName, type);

  const res = await fetch(path);
  const blobData = await res.blob();

  const uriPush = await putPhoto(uriPut, blobData);
  return uriPush;
};
