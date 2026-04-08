import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinkStyles = (isActive: boolean) =>
    `relative py-1 transition-all duration-300 font-medium hover:text-blue-600 ${
      isActive
        ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-blue-600"
        : "text-gray-600"
    }`;

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b border-gray-100">
      <nav className="flex items-center gap-8">
        <NavLink
          to="/"
          end
          className={({ isActive }) => navLinkStyles(isActive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/eventos"
          end
          className={({ isActive }) => navLinkStyles(isActive)}
        >
          Catalogo
        </NavLink>
      </nav>

      <div className="flex items-center gap-6">
        {user ? (
          <>
            <NavLink
              to="/criar-evento"
              end
              className={({ isActive }) => navLinkStyles(isActive)}
            >
              Criar Evento
            </NavLink>
            <button
              onClick={handleLogout}
              className="ml-2 px-4 py-2 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-colors duration-200"
            >
              Sair
            </button>
          </>
        ) : (
          <div className="flex items-center gap-8">
            <NavLink
              to="/login"
              end
              className={({ isActive }) => navLinkStyles(isActive)}
            >
              Login
            </NavLink>

            <NavLink
              to="/cadastro"
              end
              className={({ isActive }) => navLinkStyles(isActive)}
            >
              Cadastro
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};