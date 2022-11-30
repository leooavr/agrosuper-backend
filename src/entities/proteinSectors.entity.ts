import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Sales } from './sales.entity';
import { ProjectedConsumptions } from './projectedConsumptions.entity';
import { RealConsumptions } from './realConsumptions.entity';

@Entity()
export class ProteinSectors extends BaseEntity {
  @PrimaryColumn({ name: 'id_protein_sector', type: 'int' })
  id: string;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @OneToMany(() => Sales, (sales) => sales.proteinSector)
  sales: Sales[];

  @OneToMany(
    () => ProjectedConsumptions,
    (projectedConsumptions) => projectedConsumptions.proteinSector,
  )
  projectedConsumptions: ProjectedConsumptions[];

  @OneToMany(
    () => RealConsumptions,
    (realConsumptions) => realConsumptions.proteinSector,
  )
  realConsumptions: RealConsumptions[];
}
