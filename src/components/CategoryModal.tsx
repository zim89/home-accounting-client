import { FC, useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { ICategory } from '../types/types';
import { instance } from '../api/axios.api';

interface ICategoryModal {
  type: 'post' | 'patch';
  id?: number;
  title?: string;
  setVisibleModal: (visible: boolean) => void;
}

const CategoryModal: FC<ICategoryModal> = ({
  type,
  id,
  title = '',
  setVisibleModal,
}) => {
  const [catTitle, setCatTitle] = useState(title);

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 w-full h-full bg-black/50 flex justify-center items-center">
      <Form
        action="/categories"
        method={type}
        onSubmit={() => setVisibleModal(false)}
        className="grid w-[300px] gap-2 rounded-md bg-slate-900 p-5"
      >
        <label htmlFor="title">
          <small>Category title</small>
          <input
            className="input w-full"
            type="text"
            name="title"
            placeholder="Title..."
            value={catTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCatTitle(e.target.value)
            }
          />
          <input type="hidden" name="id" value={id} />
        </label>

        <div className="flex items-center gap-2">
          <button className="btn btn-green" type="submit">
            {type === 'patch' ? 'Save' : 'Create'}
          </button>
          <button
            onClick={() => setVisibleModal(false)}
            className="btn btn-red"
            type="button"
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  );
};
export default CategoryModal;
