import { EventoRepository } from "../repositories/EventoRepository";

export class EventoService {
  private repo = new EventoRepository();

  async criar(data: any) {
    console.log(data)
    return this.repo.create({ ...data,    
     });
  }

  async listar() {
    return this.repo.findAll();
  }

  async buscarPorId(id: number) {
    return this.repo.findById(id);
  }

  async atualizar(id: number, data: any) {
    return this.repo.update(id, { ...data, data_evento: new Date(data.data_evento) });
  }

  async deletar(id: number) {
    return this.repo.delete(id);
  }
}