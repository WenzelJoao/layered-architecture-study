import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { createHash } from "../utils/createHash";
import bcrypt from "bcrypt";
import { signTokenAcesso, signTokenRefresh } from "../utils/jwt";
import { prisma } from "../database/prisma/prisma";

export class UsuarioService {
  private repo = new UsuarioRepository();

  async cadastro(data: any) {
    const hash = await createHash(data.senha);
    return this.repo.create({ email: data.email, nome: data.nome, senha: hash });
  }

  async login(data: any) {
    const user = await this.repo.findByEmail(data.email);
    const valid = await bcrypt.compare(data.senha || "", user?.senha || "");

    if (!user || !valid) throw new Error("Credenciais inválidas");

    const accessToken = signTokenAcesso({ email: user.email, nome: user.nome });
    const refreshToken = signTokenRefresh({ email: user.email, nome: user.nome });

    await prisma.token.create({
      data: { token: accessToken, tipo: "ACESSO", usuarioId: user.id, expira_em: new Date(Date.now() + 3600000) },
    });

    await prisma.token.create({
      data: { token: refreshToken, tipo: "REFRESH", usuarioId: user.id, expira_em: new Date(new Date().setMonth(new Date().getMonth() + 1)) },
    });

    return { accessToken, refreshToken };
  }

  async listar() {
    return this.repo.findAll();
  }
}