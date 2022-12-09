import { Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async logout(): Promise<UsersEntity[]> {
    const result = await this.usersRepository.find({});

    return result;
  }
}
