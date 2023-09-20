type TPutPhoto = (uriPost: string, photo: string) => Promise<string>;

export const PutPhoto: TPutPhoto = async (uriPut, photo) => {
  const path = await fetch(uriPut, {
    method: 'PUT',
    body: photo,
  }).then(res => res.text());

  return path.slice(0, path.indexOf('?'));
};
