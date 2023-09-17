export interface IJoinUsForm {
  onNavigate: (path: 'LogIn' | 'SuccessJoinUsPage') => void;
}

export type TInputs = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export type TErrorArr = {
  field: 'email' | 'password' | 'passwordConfirm';
  errors: string[];
};

export type THandlerGenerateStatus = (
  errorMessage: string | undefined,
) => 'waiting' | 'success' | 'error';
