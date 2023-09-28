export interface IDatePicker {
  setDate: (date: string) => void;
  date: string;
}

export type THandlerAddZero = (num: number | string) => string;

export type TGetDaysArr = (year: string, month: number) => string[];

export type TGetYearsArr = (yearStart: number) => string[];

export type TGetIndexMonth = (month: string) => number;
