import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataCadastro, setDataCadastro] = useState<string | null>(null);

  const navigate = useNavigate();

  const cadastrar = async () => {
    try {
      const response = await axios.post("http://localhost:3000/cadastro", {
        email,
        senha,
      });
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Erro ao fazer o cadastro, verifique suas credenciais!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form className="p-8 bg-white border border-gray-100 rounded-xl shadow-lg space-y-6 flex flex-col items-center w-full max-w-md md:max-w-lg transition-all">
        <h1 className="text-4xl font-extrabold text-gray-900 flex justify-center tracking-tight">
          Cadastro
        </h1>
        
        <div className="w-full space-y-4">
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
            placeholder="Digite seu Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
            placeholder="Digite sua senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            name="password"
            required
          />
        </div>

        <div className="flex justify-center w-full pt-2">
          <button
            type="button"
            onClick={cadastrar}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:transform active:scale-[0.98] transition-all shadow-md"
          >
            Criar Conta
          </button>
        </div>
      </form>
    </div>
  )
}

