import { ImageOrVideo } from 'react-native-image-crop-picker';
import { TStatus } from '../../../types';

export type THandlerGenerateButtonStatus = (
  isAfter: boolean,
  isValid: boolean,
  isLoadingRequest: boolean,
) => TStatus;

export type TInputs = {
  description: string;
  media: ImageOrVideo;
  title: string;
};
