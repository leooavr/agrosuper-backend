import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';

import { Regions } from './regions.entity';
import { Communes } from './communes.entity';

@Entity()
export class Provinces extends BaseEntity {
  @PrimaryColumn({ name: 'id_province', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @Column({ name: 'id_region', type: 'int' })
  @JoinColumn({ name: 'id_region' })
  @ManyToOne(() => Regions, (region) => region.provinces)
  region: Regions;

  @OneToMany(() => Communes, (commune) => commune.province)
  commune: Communes[];
}
