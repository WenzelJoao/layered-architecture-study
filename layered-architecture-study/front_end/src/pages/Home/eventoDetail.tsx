import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'



const EventoDetail = () => {


    const {id} = useParams();
    const [evento, setEvento] = useState(null);

    const buscarDadosEvento = async () => {
    const token = localStorage.getItem("tokenAcesso");
    if (!token) return;

    try {
      const response = await axios.get(`http://localhost:3000/evento/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data) {
        setEvento(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
        buscarDadosEvento();
    }, [])
    

    if(!evento) return <div>Carregando...</div>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h2 className='text-3xl h-10'>{evento.tipo_evento}</h2>
    <h3 className="mt-4 font-bold">{evento.lotacao}</h3>
    <p className="max-w-md">{evento.descricao}</p>
    <p>{new Date(evento.data_evento).toLocaleString('pt-BR')}</p>
</div>
  )
}

export default EventoDetail