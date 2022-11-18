import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { Areas } from './areas.entity';
import { Communes } from "./communes.entity";
import { MonthlyAreaPopulationProjection } from './monthlyAreaPopulationProjection.entity';

@Entity()
export class Districts extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_district' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'id_commune', type: 'uuid' })
    @JoinColumn({ name: 'id_commune'})
    @ManyToOne(() => Communes, (commune) => commune.district)
    commune: Communes;  

    @OneToMany(() => Areas, (areas) => areas.district)
    areas: Areas[];

    @OneToMany(() => MonthlyAreaPopulationProjection, (monthlyAreaPopulationProjections) => monthlyAreaPopulationProjections.district)
    monthlyAreaPopulationProjections: MonthlyAreaPopulationProjection[];
}