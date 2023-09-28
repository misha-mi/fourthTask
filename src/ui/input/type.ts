export interface IInput {
  placeholder: string;
  label: string;
  status: 'waiting' | 'disabled' | 'success' | 'error';
  onChange?: (value: string) => void;
  value: string;
  errorMessage?: string;
  isPasswordInput?: boolean;
  isPhonePad?: boolean;
  isTextArea?: boolean;
}
