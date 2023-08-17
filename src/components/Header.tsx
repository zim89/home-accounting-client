import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBtc, FaSignOutAlt } from 'react-icons/fa';

const Header: FC = () => {
  const isAuth = false;

  return (
    <header className=" bg-slate-800 py-4 shadow-sm backdrop-blur-sm">
      <div className="container flex items-center">
        <Link to="/">
          <FaBtc size={20} />
        </Link>

        {/* MENU */}
        {isAuth && (
          <nav className="ml-auto mr-10">
            <ul className="flex items-center gap-5">
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive ? 'text-white' : 'text-white/50'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/categories'}
                  className={({ isActive }) =>
                    isActive ? 'text-white' : 'text-white/50'
                  }
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/transactions'}
                  className={({ isActive }) =>
                    isActive ? 'text-white' : 'text-white/50'
                  }
                >
                  Transactions
                </NavLink>
              </li>
            </ul>
          </nav>
        )}

        {/* ACTIONS */}
        {isAuth ? (
          <button className="btn btn-red">
            <span>Log out</span>
            <FaSignOutAlt />
          </button>
        ) : (
          <Link
            to={'auth'}
            className="ml-auto py-2 text-white/50 hover:text-white"
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
