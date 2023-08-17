import { FC, useState } from 'react';
import { AuthService } from '../services/auth.service';
import { toast } from 'react-toastify';
import { setTokenToLocalStorage } from '../helpers/localStorage.helper';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.register({ email, password });
      if (data) {
        toast.success('Accound success created.');
        setIsLogin(!isLogin);
      }
    } catch (error: any) {
      const err = error.response?.data.message;
      toast.error(err.toString());
    }
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({ email, password });
      if (data) {
        setTokenToLocalStorage(data.token);
        dispatch(login(data));
        toast.success('You logged in.');
        navigate('/');
      }
    } catch (error: any) {
      const err = error.response?.data.message;
      toast.error(err.toString());
    }
  };

  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? 'Login' : 'Registration'}
      </h1>

      <form
        className="mx-auto flex w-1/3 flex-col gap-5"
        onSubmit={isLogin ? loginHandler : registerHandler}
      >
        <input
          type="text"
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-green mx-auto">
          Submit
        </button>
      </form>

      <div className="mt-5 flex justify-center">
        {isLogin ? (
          <button
            onClick={() => setIsLogin(!isLogin)}
            type="button"
            className="text-slate-300 hover:text-white"
          >
            You don't have account? Register
          </button>
        ) : (
          <button
            onClick={() => setIsLogin(!isLogin)}
            type="button"
            className="text-slate-300 hover:text-white"
          >
            Already have an account? Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Auth;
