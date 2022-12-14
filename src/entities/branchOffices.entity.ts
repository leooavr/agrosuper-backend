import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Communes } from './communes.entity';

@Entity()
export class BranchOffices extends BaseEntity {
  @PrimaryColumn({ name: 'id_branch_offices', type: 'text' })
  id: string;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @OneToMany(() => Communes, (communes) => communes.branchOffice)
  communes: Communes[];
}
