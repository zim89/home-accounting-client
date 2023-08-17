import { FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import img from '../assets/page_protected.png';

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const isAuth = useAuth();
  return (
    <div>
      {isAuth ? (
        children
      ) : (
        <div className=" mt-40 flex flex-col items-center justify-center gap-10">
          <h1 className="text-2xl">To view this page you must be logged in!</h1>
          <img src={img} alt="Protected pahe image" className="w-1/3" />
        </div>
      )}
    </div>
  );
};
export default ProtectedRoute;
