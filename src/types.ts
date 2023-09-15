import { Control } from 'react-hook-form';

export type TSize = 'small' | 'medium' | 'large';

export type TStatus = 'waiting' | 'loading' | 'disabled';

export type TPressed = { pressed: boolean };

export type TColor = { color: string };

export type TUser = {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  birthDate: string;
  email: string;
  phone: string;
  country: string;
};

export type TControl = {
  control: Control<TUser, any>;
};
