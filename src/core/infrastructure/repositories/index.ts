import type { User } from "@/core/entities/models/user";
import http from "@/utils/fetch/http";

export const userRepository = {
  createUser: async (data: User) => {
    const response = await http.post("/user", data);
    return response.data;
  },
};
