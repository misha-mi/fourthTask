export interface ISettingGender {
  gender: 'MALE' | 'FEMALE';
  setGender: (value: 'MALE' | 'FEMALE') => void;
}
