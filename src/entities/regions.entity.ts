import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Provinces } from './provinces.entity';

@Entity()
export class Regions extends BaseEntity {
  @PrimaryColumn({ name: 'id_region', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @OneToMany(() => Provinces, (province) => province.region)
  provinces: Provinces[];
}
