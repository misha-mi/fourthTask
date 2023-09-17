import { Control } from 'react-hook-form';

export type TSize = 'small' | 'medium' | 'large';

export type TStatus = 'waiting' | 'loading' | 'disabled';

export type TPressed = { pressed: boolean };

export type TColor = { color: string };

export type TUser = {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: 'Male' | 'Female';
  birthDate: string;
  email: string;
  phone: string;
  country: string;
};

export type TControl = {
  control: Control<TUser, any>;
};

export type TSort = 'new' | 'top';

export type TFilter = 'main' | 'favorites' | 'my posts';

export type TGetPost = (
  afterCursor: string,
  onCompleted: THandlerCompleted,
  sort?: TSort,
) => void;

export type THandlerCompleted = (posts: {
  data: { id: string }[];
  pageInfo: { afterCursor: string };
}) => void;

export type TAuthor = {
  avatarUrl: string;
  firstName: string;
};

export type TPost = {
  title: string;
  createdAt: string;
  description: string;
  id: string;
  isLiked: boolean;
  likesCount: number;
  mediaUrl: string;
  author: TAuthor;
};
