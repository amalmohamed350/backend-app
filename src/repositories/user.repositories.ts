import { User } from "../models/user.model";

export class UserRepository {
  async createUser(name: string, email: string) {
    return User.create({ name, email });
  }

  async findAllUsers() {
    return User.findAll();
  }

  async updateUser(id: number, name: string, email: string) {
    return User.update({ name, email }, { where: { id } });
  }

  async deleteUser(id: number) {
    return User.destroy({ where: { id } });
  }
}
