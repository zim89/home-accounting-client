import { FC, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import { IResponseTransactionsLoader } from '../types/types';
import CategoryModal from './CategoryModal';

const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionsLoader;
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <div className="rounded-md bg-slate-800 p-4">
      <Form className="grid gap-2" method="post" action="/transactions">
        <label className="grid" htmlFor="title">
          <span>Title:</span>
          <input
            className="input mt-2"
            type="text"
            placeholder="Title..."
            name="title"
            required
          />
        </label>
        <label className="grid" htmlFor="amount">
          <span>Amount:</span>
          <input
            className="input mt-2"
            type="number"
            placeholder="Amount..."
            name="amount"
            required
          />
        </label>

        {/* Select Category */}
        {categories.length ? (
          <label htmlFor="category" className="grid">
            <span>Category:</span>
            <select name="category" className="input mt-2" required>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <p className="mt-2 text-red-300">
            To continue create category first!
          </p>
        )}

        {/* Manage Categories */}
        <button
          onClick={() => setVisibleModal(true)}
          className="mt-2 flex max-w-fit items-center gap-2 text-white/50 hover:text-white"
        >
          <FaPlus />
          <span>Manage Categories:</span>
        </button>

        {/* Radio Buttons */}
        <div className="flex items-center gap-4 mt-2">
          <label
            htmlFor="income"
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              id="income"
              type="radio"
              name="type"
              value={'income'}
              className="form-radio text-blue-600"
            />
            <span>Income</span>
          </label>
          <label
            htmlFor="expense"
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              id="expense"
              type="radio"
              name="type"
              value={'expense'}
              className="form-radio text-blue-600"
            />
            <span>Expense</span>
          </label>
        </div>

        {/* Submit Button */}
        <button className="btn btn-green mt-2 max-w-fit" type="submit">
          Submit
        </button>
      </Form>

      {visibleModal && (
        <CategoryModal type="post" setVisibleModal={setVisibleModal} />
      )}
    </div>
  );
};
export default TransactionForm;
