import { CustomRepository } from 'src/common/decorator/typeorm.decorator';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';

@CustomRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity> {}
