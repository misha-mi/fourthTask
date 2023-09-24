export interface IPhoneInput {
  phone: string;
  setPhone: (value: string | null) => void;
  errorMessage: string | undefined;
}
