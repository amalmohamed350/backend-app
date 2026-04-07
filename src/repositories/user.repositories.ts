import { User } from "../models/user";


export class userRepository {
  async createUser(name: string, email: string, session: any) {
    return User.create([{ name, email }], { session });
  }
}

export class UserRepository {
  async createUser(name: string, email: string) {
    return User.create({ name, email });
  }

  async getUsers() {
    return User.find();
  }

  async deleteUser(id: string) {
    return User.findByIdAndDelete(id);
  }

  async updateUser(id: string, name: string, email: string) {
    return User.findByIdAndUpdate(id, { name, email }, { new: true });
  }
}
