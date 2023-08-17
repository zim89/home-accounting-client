import { FC, useState } from 'react';

const Auth: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? 'Login' : 'Registration'}
      </h1>

      <form className="mx-auto flex w-1/4 flex-col gap-5">
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
