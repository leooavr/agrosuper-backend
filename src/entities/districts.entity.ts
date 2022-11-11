import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { Area } from './areas.entity';
import { Communes } from "./communes.entity";
import { MonthlyAreaPopulationProjection } from './monthlyAreaPopulationProjection.entity';

@Entity()
export class District extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_district' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'id_commune', type: 'uuid' })
    @JoinColumn({ name: 'id_commune'})
    @ManyToOne(() => Communes, (commune) => commune.district)
    commune: Communes;  

    @OneToMany(() => Area, (areas) => areas.district)
    areas: Area[];

    @OneToMany(() => MonthlyAreaPopulationProjection, (monthlyAreaPopulationProjections) => monthlyAreaPopulationProjections.district)
    monthlyAreaPopulationProjections: MonthlyAreaPopulationProjection[];
}