import { prisma } from "../database/prisma/prisma";

export class UsuarioRepository {
  create(data: any) {
    return prisma.usuario.create({ data });
  }

  findByEmail(email: string) {
    return prisma.usuario.findUnique({ where: { email } });
  }

  findAll() {
    return prisma.usuario.findMany();
  }

  findById(id: number) {
    return prisma.usuario.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return prisma.usuario.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.usuario.delete({ where: { id } });
  }
}