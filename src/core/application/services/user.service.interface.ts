import type { User } from "@/core/entities/models/user";

export interface IUserService {
  validateCreateUser(data: User): User;
}
