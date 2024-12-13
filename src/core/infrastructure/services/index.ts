import type { IUserService } from "@/core/application/services/user.service.interface";
import type { User } from "@/core/entities/models/user";

export const UserService: IUserService = {
  validateCreateUser: (data: User) => {
    return data;
  },
};
