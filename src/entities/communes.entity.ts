import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { Provinces } from './provinces.entity';

import { District } from "./districts.entity";
import { DeliveryZone } from './deliveryZones.entity';
import { Clients } from "./clients.entity";
import { BranchOffices } from './branchOffices.entity';
import { MonthlyCommunalPopulationProjection } from './monthlyCommunalPopulationProjection.entity';

@Entity()
export class Communes extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_commune' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'id_province', type: 'uuid' })
    @JoinColumn({ name: 'id_province'})
    @ManyToOne(() => Provinces, (province) => province.commune)
    province: Provinces

    @Column({ name: 'id_branch_offices', type: 'uuid' })
    @JoinColumn({ name: 'id_branch_offices'})
    @ManyToOne(() => BranchOffices, (branchOffice) => branchOffice.communes)
    branchOffice: BranchOffices;

    @OneToMany(() => District, (district) => district.commune)
    district: District[];

    @OneToMany(() => DeliveryZone, (deliveryZone) => deliveryZone.commune)
    deliveryZone: DeliveryZone[];

    @OneToMany(() => Clients, (clients) => clients.commune)
    clients: Clients[];

    @OneToMany(() => MonthlyCommunalPopulationProjection, (monthlyCommunalPopulationProjection) => monthlyCommunalPopulationProjection.commune)
    monthlyCommunalPopulationProjections: MonthlyCommunalPopulationProjection[];

}