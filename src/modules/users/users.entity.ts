import { DB } from 'src/constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: DB.USERS_REPOSITORY })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  user_id: string;

  @Column()
  password: string;

  @Column()
  name: string;
}
