import { prisma } from "../database/prisma/prisma";

export class UsuarioRepository {
 async create(userData: any) {
    try {
      console.log("Dados que chegaram no Prisma:", userData);
      return await prisma.usuario.create({
      data: {
        email: userData.email,
        senha: userData.senha,
        nome: userData.nome || null,
      },
    });
    } catch (error: any) {

      console.error("ERRO DETALHADO DO PRISMA:", error);
      throw error;
    }
  
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