import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { Provinces } from './provinces.entity';

import { Districts } from './districts.entity';
import { DeliveryZones } from './deliveryZones.entity';
import { Clients } from './clients.entity';
import { BranchOffices } from './branchOffices.entity';
import { MonthlyCommunalPopulationProjections } from './monthlyCommunalPopulationProjections.entity';

@Entity()
export class Communes extends BaseEntity {
  @PrimaryColumn({ name: 'id_commune', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @Column({ name: 'id_province', type: 'uuid' })
  @JoinColumn({ name: 'id_province' })
  @ManyToOne(() => Provinces, (province) => province.commune)
  province: Provinces;

  @Column({ name: 'id_branch_offices', type: 'int' })
  @JoinColumn({ name: 'id_branch_offices' })
  @ManyToOne(() => BranchOffices, (branchOffice) => branchOffice.communes)
  branchOffice: BranchOffices;

  @OneToMany(() => Districts, (district) => district.commune)
  district: Districts[];

  @OneToMany(() => DeliveryZones, (deliveryZone) => deliveryZone.commune)
  deliveryZone: DeliveryZones[];

  @OneToMany(() => Clients, (clients) => clients.commune)
  clients: Clients[];

  @OneToMany(
    () => MonthlyCommunalPopulationProjections,
    (monthlyCommunalPopulationProjection) =>
      monthlyCommunalPopulationProjection.commune,
  )
  monthlyCommunalPopulationProjections: MonthlyCommunalPopulationProjections[];
}
