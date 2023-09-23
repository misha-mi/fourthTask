export interface IInput {
  placeholder: string;
  label: string;
  status: 'waiting' | 'disabled' | 'success' | 'error';
  onChange?: () => void;
  value: string;
  errorMessage?: string;
  isPasswordInput?: boolean;
}
