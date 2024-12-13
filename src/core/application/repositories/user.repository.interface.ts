import type { CreateUser } from "@/core/entities/dto";
import type { User } from "@/core/entities/models/user";

export interface IUsersRepository {
  createUser(input: CreateUser): Promise<User>;
}
