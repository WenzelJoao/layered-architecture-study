import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const CadastrarEvento = () => {
  const [tipoEvento, setTipoEvento] = useState("");
  const [lotacao, setLotacaoMaxima] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();

  const cadastrar = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/cadastro-evento",
        {
          tipo_evento: tipoEvento,
          lotacao: lotacao,
          data_evento: dataEvento,
          descricao: descricao,
        },
        {
          // 2. Adicione o header de autorização
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert("Evento cadastrado com sucesso!");
      navigate("/");
    } catch (error: any) {
    console.error(error);
    if (error.response?.status === 401) {
      alert("Sua sessão expirou ou você não está logado.");
    } else {
      alert("Erro ao cadastrar evento.");
    }
  }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Criar Novo Evento
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Preencha os detalhes abaixo para organizar sua experiência.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={cadastrar}>
          <div className="grid grid-cols-1 gap-y-4">
            {/* Tipo de Evento */}
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Tipo de Evento
              </label>
              <select
                id="type"
                name="type"
                required
                value={tipoEvento}
                onChange={(e) => setTipoEvento(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
              >
                <option value="">Selecione um tipo</option>
                <option value="workshop">Workshop</option>
                <option value="conferencia">Conferência</option>
                <option value="show">Show / Concerto</option>
                <option value="reuniao">Reunião Corporativa</option>
              </select>
            </div>

            {/* Lotação Máxima */}
            <div>
              <label
                htmlFor="maxCapacity"
                className="block text-sm font-medium text-gray-700"
              >
                Lotação Máxima
              </label>
              <input
                id="maxCapacity"
                name="maxCapacity"
                type="number"
                min="1"
                required
                value={lotacao}
                onChange={(e) => setLotacaoMaxima(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Ex: 150"
              />
            </div>

            {/* Data do Evento */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Data e Hora do Evento
              </label>
              <input
                id="date"
                name="date"
                type="datetime-local"
                required
                value={dataEvento}
                onChange={(e) => setDataEvento(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Descrição */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Descrição do Evento
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Conte mais sobre o que vai acontecer..."
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Publicar Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastrarEvento;
