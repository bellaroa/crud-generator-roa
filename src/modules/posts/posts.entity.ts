import { DB } from 'src/constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: DB.POSTS_REPOSITORY })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  post_id: string;

  @Column()
  user_id: string;

  @Column()
  date: string;

  @Column()
  title: string;

  @Column()
  contents: string;
}
