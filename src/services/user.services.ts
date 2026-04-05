import { UserRepository } from "../repositories/user.repositories";
export class UserService {
  private repo = new UserRepository();

  createUser(name: string, email: string) {
    return this.repo.createUser(name, email);
  }

  getUsers() {
    return this.repo.getUsers();
  }
  updateUser(id: string, name: string, email: string) {
    return this.repo.updateUser(id, name, email);
  }

  deleteUser(id: string) {
    return this.repo.deleteUser(id);
  }
}
