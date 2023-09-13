export interface ILogIntForm {
  onClickRegister: () => void;
}

export type TInputs = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export type TErrorArr = {
  field: 'email' | 'password';
  errors: string[];
};
