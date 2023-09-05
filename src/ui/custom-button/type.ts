import { TStatus } from '../../types';

export interface ICustomButton {
  title: string;
  onClick?: () => void;
  size?: 'large' | 'medium';
  status?: TStatus;
  isRedText?: boolean;
}
