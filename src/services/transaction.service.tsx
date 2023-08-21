import { toast } from 'react-toastify';
import { instance } from '../api/axios.api';
import { ICategory, ITransaction } from '../types/types';

export const transactionsLoader = async () => {
  const categories = await instance.get<ICategory[]>('/categories');
  const transactions = await instance.get<ITransaction[]>('/transactions');
  const totalIncome = await instance.get<number>('/transactions/income');
  const totalExpense = await instance.get<number>('/transactions/expense');

  const data = {
    categories: categories.data,
    transactions: transactions.data,
    totalIncome: totalIncome.data,
    totalExpense: totalExpense.data,
  };
  return data;
};

export const transactionsAction = async ({ request }: any) => {
  switch (request.method) {
    case 'POST': {
      const formData = await request.formData();
      const newTransaction = {
        title: formData.get('title'),
        amount: +formData.get('amount'),
        category: formData.get('category'),
        type: formData.get('type'),
      };
      await instance.post('/transactions', newTransaction);
      toast.success('Transaction success added.');
      return null;
    }

    case 'DELETE': {
      const formData = await request.formData();
      const transactionId = formData.get('id');
      await instance.delete(`/transactions/transaction/${transactionId}`);
      toast.success('Transaction success deleted. ');
      return null;
    }
  }
};
