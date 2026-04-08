import { verificarTokenAcesso } from "../utils/jwt";
import type { Response, Request, NextFunction } from "express";


export function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "missing token" });
  }

  try {
    const token = header.slice("Bearer ".length);
    const payload = verificarTokenAcesso(token);
    (req as any).user = payload;

    if (!payload) {
      return res.status(401).json({ error: "invalid token" });
    }

    // AQUI ESTÁ O PULO DO GATO:
    // Salva o payload (os dados do usuário) dentro da requisição
    (req as any).user = payload; 

    next();
  } catch (error) {
    return res.status(401).json({ error: "invalid or expired token" });
  }
}
