export interface ICheckInputProps {
  type?: 'round' | 'square';
  isChecked: boolean;
  setIsChecked: () => void;
}
