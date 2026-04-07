import type { Request, Response } from "express";
import { EventoService } from "../services/EventoService";

const service = new EventoService();

export class EventoController {
  async criar(req: Request, res: Response) {
    const evento = await service.criar(req.body);
    return res.status(201).json(evento);
  }

  async listar(req: Request, res: Response) {
    const eventos = await service.listar();
    return res.json(eventos);
  }

  async buscarPorId(req: Request, res: Response) {
    const evento = await service.buscarPorId(Number(req.params.id));
    return res.json(evento);
  }

  async atualizar(req: Request, res: Response) {
    const evento = await service.atualizar(Number(req.params.id), req.body);
    return res.json(evento);
  }

  async deletar(req: Request, res: Response) {
    await service.deletar(Number(req.params.id));
    return res.json({ mensagem: "Evento deletado" });
  }
}