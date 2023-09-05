export interface ICustomButton {
  title: string;
  onClick?: () => void;
  size?: 'large' | 'medium';
  status?: 'waiting' | 'loading' | 'disabled';
  isRedText?: boolean;
}
