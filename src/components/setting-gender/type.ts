export interface ISettingGenderProps {
  gender: 'MALE' | 'FEMALE';
  setGender: (value: 'MALE' | 'FEMALE') => void;
}
