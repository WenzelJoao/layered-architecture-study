
import { NavLink, useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'

export const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/")
  }

  return (
    <header className='flex items-center justify-between p-4 bg-gray-200'>
      <nav className='space-x-4'>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/autores"
          end
          className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-800'}>
            Catalogo
          </NavLink>
      </nav>
      <div>
        {
          user ? (
            <>
              <span className="mr-2">{user.email}</span>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Sair</button>
            </>
          ) : null
        }
      </div>
    </header>
  )
}
