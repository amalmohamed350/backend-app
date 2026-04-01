import { UserRepository } from "../repositories/user.repositories";
export class UserService {
  private repo = new UserRepository();

  createUser(name: string, email: string) {
    return this.repo.createUser(name, email);
  }

  getUsers() {
    return this.repo.findAllUsers();
  }
  updateUser(id: number, name: string, email: string) {
    return this.repo.updateUser(id, name, email);
  }

  deleteUser(id: number) {
    return this.repo.deleteUser(id);
  }
}
