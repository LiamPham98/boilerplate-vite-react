import type { User } from "@/core/entities/models/user";

import type { IUsersRepository } from "../../repositories/user.repository.interface";

export type ICreateUserUseCase = ReturnType<typeof createUserUseCase>;

export const createUserUseCase =
  (userRepository: IUsersRepository) =>
  async (data: User): Promise<User> => {
    const newTodo = await userRepository.createUser(data);

    return newTodo;
  };
