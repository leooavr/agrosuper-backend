import { BaseEntity, Column, Entity, OneToMany } from 'typeorm';
import { Provinces } from './provinces.entity';

@Entity()
export class Regions extends BaseEntity {
  @Column({ name: 'id_region', type: 'int', primary: true })
  id: number;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @OneToMany(() => Provinces, (province) => province.region)
  provinces: Provinces[];
}
