import { prisma } from "../database/prisma/prisma";

export class EventoRepository {
  create(data: any) {
    return prisma.evento.create({ data });
  }

  findAll() {
    return prisma.evento.findMany();
  }

  findById(id: number) {
    return prisma.evento.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return prisma.evento.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.evento.delete({ where: { id } });
  }
}