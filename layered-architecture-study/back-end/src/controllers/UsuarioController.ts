import type { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

const service = new UsuarioService();

export class UsuarioController {
  async cadastro(req: Request, res: Response) {
  try {
    console.log("Corpo da requisição:", req.body);
    const usuario = await service.cadastro(req.body);
    return res.status(201).json({ message: "Usuário criado", data: usuario });
  } catch (error: any) {
    console.error("Erro no Processo de Cadastro:", error.message);
    return res.status(400).json({ error: error.message });
  }
}

  async login(req: Request, res: Response) {
    try {
      const tokens = await service.login(req.body);
      return res.json(tokens);
    } catch (err: any) {
      return res.status(401).json({ message: err.message });
    }
  }

  async listar(req: Request, res: Response) {
    const usuarios = await service.listar();
    return res.json(usuarios);
  }
}