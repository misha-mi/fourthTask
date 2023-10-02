import { TStatus } from '../../types';

export interface ICustomButtonProps {
  title: string;
  onClick: () => void;
  size?: 'large' | 'medium';
  status?: TStatus;
  isRedText?: boolean;
}
