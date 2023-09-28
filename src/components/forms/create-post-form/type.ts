import { TStatus } from '../../../types';

export type THandlerGenerateButtonStatus = (
  isAfter: boolean,
  isValid: boolean,
  isLoadingRequest: boolean,
) => TStatus;

export type TInputs = {
  description: string;
  media: string;
  title: string;
};
