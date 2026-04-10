import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        senha: password,
      });

      if (response?.data) {
        const { accessToken, refreshToken } = response.data;

        localStorage.setItem("tokenAcesso", accessToken);
        localStorage.setItem("tokenRefresh", refreshToken);

        login(response.data);

        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white border border-gray-100 rounded-xl shadow-lg space-y-6 flex flex-col w-full max-w-md transition-all"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 text-center tracking-tight">
          Login
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:transform active:scale-[0.98] transition-all shadow-md"
        >
          Entrar
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Ainda não tem conta?{" "}
          <NavLink
            to="/cadastro"
            className="text-blue-600 font-medium hover:underline underline-offset-4"
          >
            Realizar Cadastro
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
