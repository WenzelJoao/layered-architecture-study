import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { NavLink, useNavigate } from 'react-router'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(email)
        navigate("/")
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form onSubmit={handleSubmit} className='p-6 border rounded shadow-md space-y-4'>
                <h1 className='text-5xl font-bold flex justify-center'>Login</h1>
                <input
                    type='email'
                    placeholder='Digite seu email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='w-full px-3 py-2 border rounded'
                />
                <input
                    type='password'
                    placeholder='Digite sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='w-full px-3 py-2 border rounded'
                />
                <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
                    Entrar
                </button>
                <p className='flex justify-center text-sm text-gray-600'>
                    <NavLink to="/cadastro">Realizar Cadastro</NavLink>
                </p>
            </form>
        </div>
    )
}

export default Login
