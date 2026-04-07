import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataCadastro, setDataCadastro] = useState<string | null>(null);

  const cadastrar = async () => {
    try {
      const response = await axios.post("http://localhost:3000/cadastro", {
        email,
        senha,
      });
      if (response?.data) {
          setDataCadastro("Cadastro realizado com sucesso!");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao fazer o cadastro, verifique suas credenciais!");
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form className="p-6 border rounded shadow-md space-y-4 flex flex-col items-center w-full max-w-md md:max-w-lg">
        <h1 className='text-5xl font-bold flex justify-center'>Cadastro</h1>
        <input
          className="w-full px-3 py-2 border rounded"
          placeholder="Digite seu Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          className="w-full px-3 py-2 border rounded"
          placeholder="Digite sua senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
          name="password"
        />
        <div className="flex justify-center w-full">
          <button
            type="button"
            onClick={cadastrar}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Cadastrar
          </button>
        </div>
      </form>
     
    </div>
  );
}