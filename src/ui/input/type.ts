export interface IInput {
  placeholder: string;
  label: string;
  status: 'waiting' | 'disabled' | 'success' | 'error';
  isPasswordInput?: boolean;
}
