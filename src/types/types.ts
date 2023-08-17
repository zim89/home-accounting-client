export interface IUser {
  id: number;
  email: string;
  token: string;
}

export interface IUserData {
  email: string;
  password: string;
}

//FIXME: убрать на беке возврат пароля и подправить интерфейс
export interface IResponseUser {
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}
