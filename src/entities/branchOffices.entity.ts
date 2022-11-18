import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Communes } from './communes.entity';

@Entity()
export class BranchOffices extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_branch_offices' })
  id: string;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @OneToMany(() => Communes, (communes) => communes.branchOffice)
  communes: Communes[];
}
