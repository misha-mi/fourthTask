export interface ICheckInput {
  type?: 'round' | 'square';
  isChecked: boolean;
  setIsChecked: () => void;
}
