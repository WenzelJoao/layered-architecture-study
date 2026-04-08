import { EventoRepository } from "../repositories/EventoRepository";

export class EventoService {
  private repo = new EventoRepository();

  async criar(data: any) {
    return this.repo.create({ ...data,
      data_evento: new Date(data.data_evento),
      usuarioId: data.usuarioId
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