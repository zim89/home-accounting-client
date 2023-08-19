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

export interface ICategory {
  title: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  transactions?: [];
}

export interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
}

export interface IResponseTransactionsLoader {
  categories: ICategory[];
  transactions: ITransaction[];
  totalIncome: number;
  totalExpense: number;
}
