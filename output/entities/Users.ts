import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer';
import { Orders } from './Orders';

@Index('users_pkey', ['userId'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'user_id' })
  userId: number;

  @Column('character varying', {
    name: 'username',
    nullable: true,
    length: 100,
  })
  username: string | null;

  @Column('text', { name: 'password', nullable: true })
  password: string | null;

  @Column('timestamp without time zone', { name: 'createdat', nullable: true })
  createdat: Date | null;

  @Column('timestamp without time zone', { name: 'updatedat', nullable: true })
  updatedat: Date | null;

  @OneToMany(() => Customer, (customer) => customer.user)
  customers: Customer[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];
}
