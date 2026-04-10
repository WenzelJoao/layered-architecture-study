import { prisma } from "../database/prisma/prisma";

export class EventoRepository {
  async create(userData: any) {
    try {
      console.log("Dados que chegaram no Prisma:", userData);
      return await prisma.evento.create({
      data: {
        tipo_evento: userData.tipo_evento,
        lotacao: parseInt(userData.lotacao),
        data_evento: new Date(userData.data_evento), 
        descricao: userData.descricao
      },
    });
    } catch (error: any) {

      console.error("ERRO DETALHADO DO PRISMA:", error);
      throw error;
    }
  
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