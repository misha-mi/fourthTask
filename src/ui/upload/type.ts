import { ImageOrVideo } from 'react-native-image-crop-picker';

export interface IUpload {
  img: ImageOrVideo;
  setImg: (img: ImageOrVideo) => void;
}
