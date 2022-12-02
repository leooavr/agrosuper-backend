import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_user' })
  id: string;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @Column({ name: 'password', type: 'text' })
  password: string;

  @Column({ name: 'email', type: 'text' })
  email: string;

  @Column({ name: 'rut', type: 'text' })
  rut: string;
}
