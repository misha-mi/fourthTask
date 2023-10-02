export interface IPhoneInputProps {
  phone: string;
  setPhone: (value: string | null) => void;
  errorMessage: string | undefined;
}
