import { getLinkForPhoto } from '../service/get-link-for-photo';
import { putPhoto } from '../service/put-photo';

export const postPhoto = async (path: string, type: 'POSTS' | 'AVATARS') => {
  const fileName = path.slice(path.lastIndexOf('/') + 1);

  const uriPut = await getLinkForPhoto(fileName, type);

  const res = await fetch(path);
  const blobData = await res.blob();

  const uriPush = await putPhoto(uriPut, blobData);
  return uriPush;
};
