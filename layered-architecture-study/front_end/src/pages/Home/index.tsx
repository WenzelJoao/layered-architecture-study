import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export const Home = () => {
  const [listaEventos, setListaEventos] = useState<any[]>([]);
  // const [eventos, setEventos] = useState<any[]>([]);

  const buscarDadosEvento = async () => {
    const token = localStorage.getItem("tokenAcesso");
    if (!token) return;

    try {
      const response = await axios.get("http://localhost:3000/evento", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data) {
        setListaEventos(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    buscarDadosEvento();
    // fetch("http://localhost:3000/evento")
    // .then(res => res.json())
    // .then(data => {
    //     setEventos(data);
    // });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-50">
      {listaEventos.map((listaEventos) => (
        <div
          key={listaEventos.id}
          className="p-8 bg-white border border-gray-100 rounded-xl shadow-lg flex flex-col items-center w-full max-w-sm transition-all hover:shadow-xl"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2 text-center">
            {listaEventos.tipo_evento}
          </h1>

          <div className="flex flex-col items-center space-y-3 w-full">
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              Lotação: {listaEventos.lotacao}
            </span>

            <p className="text-gray-600 text-center leading-relaxed italic">
              "{listaEventos.descricao}"
            </p>

            <div className="pt-4 border-t border-gray-100 w-full text-center">
              <p className="text-gray-400 text-sm font-medium">
                {new Date(listaEventos.data_evento).toLocaleString("pt-BR")}
              </p>
            </div>
          </div>
          <button
            className="text-white
                             bg-blue-500
                              hover:bg-blue-700
                              px-5
                              py-2
                              rounded-2xl
                              mt-2"
          >
            <Link to={`/listar-evento/${listaEventos.id}`}>Detalhes</Link>
          </button>
        </div>
      ))}
    </div>
  );
};
