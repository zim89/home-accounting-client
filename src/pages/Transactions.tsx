import { FC } from 'react';
import TransactionForm from '../components/TransactionForm';
import {
  ICategory,
  IResponseTransactionsLoader,
  ITransaction,
} from '../types/types';
import { instance } from '../api/axios.api';
import { toast } from 'react-toastify';
import TransactionTable from '../components/TransactionTable';
import { useLoaderData } from 'react-router-dom';
import { formatToUSD } from '../helpers/currency.helper';
import Chart from '../components/Chart';

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

const Transactions: FC = () => {
  const { totalIncome, totalExpense } =
    useLoaderData() as IResponseTransactionsLoader;

  return (
    <>
      <div className="mt-4 grid grid-cols-3 items-start gap-4">
        {/*ADD Transactions Form  */}
        <div className="col-span-2 grid">
          <TransactionForm />
        </div>

        {/* Statistic Block */}
        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-md text-center font-bold uppercase">
                Total Income:
              </p>
              <p className="mt-2 rounded-sm bg-green-600 p-1 text-center">
                {formatToUSD.format(totalIncome)}
              </p>
            </div>
            <div>
              <p className="text-md text-center font-bold uppercase">
                Total Expense:
              </p>
              <p className="mt-2 rounded-sm bg-red-500 p-1 text-center">
                {formatToUSD.format(totalExpense)}
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="flex justify-center">
            <Chart totalExpense={totalExpense} totalIncome={totalIncome} />
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="my-5">
        <TransactionTable limit={5} />
      </div>
    </>
  );
};
export default Transactions;
