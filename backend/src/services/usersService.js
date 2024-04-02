// usersService.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (username, password) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Erro ao criar novo usuário: " + error.message);
  }
};

export const findUserByName = async (username) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Erro ao buscar usuário por nome: " + error.message);
  }
};

// Outras operações relacionadas aos usuários podem ser adicionadas aqui
