import debug from 'debug';
import { CRUD } from "../../domain/interfaces/crud.interface";
import User from "../models/user.model";
import { UserDto } from "../dto/user.dto";

const log: debug.IDebugger = debug('app:users-controller');
class UsersService implements CRUD {
  async list(limit: number, offset: number) {
    return await User.findAll({ limit, offset });
  }

  async getById(resourceId: any) {
    return await User.findByPk(resourceId);
  }

  async create(resource: UserDto) {
    return await User.create(resource);
  }

  async updateById(resourceId: any, resource: UserDto) {
    return await User.update(resource, {
      where: {
        id: resourceId,
      },
    });
  }

  async deleteById(resourceId: any) {
    return await User.destroy({
      where: {
        id: resourceId,
      },
    });
  }
}

export default new UsersService();
