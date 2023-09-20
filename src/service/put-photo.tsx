type TPutPhoto = (uriPost: string, photo: string) => Promise<string>;

export const putPhoto: TPutPhoto = async (uriPut, photo) => {
  const path = await fetch(uriPut, {
    method: 'PUT',
    body: photo,
  }).then(res => res.url);
  return path.slice(0, path.indexOf('?'));
};
