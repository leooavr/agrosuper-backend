import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { District } from './districts.entity';

@Entity()
export class MonthlyAreaPopulationProjection extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_month_area_pop_proj' })
    id: string;

    @Column({ name: 'year', type: 'int'})
    year: number;

    @Column({ name: 'month', type: 'text'})
    month: string;

    @Column({ name: 'projection', type: 'int'})
    projection: number;

    @Column({ name: 'es_real', type: 'boolean'})
    esReal: boolean;

    @Column({ name: 'id_commune', type: 'uuid' })
    @JoinColumn({ name: 'id_commune'})
    @ManyToOne(() => District, (district) => district.monthlyAreaPopulationProjections)
    district: District;
    
}