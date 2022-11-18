import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Communes } from './communes.entity';

@Entity()
export class MonthlyCommunalPopulationProjections extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_month_com_pop_proj' })
    id: string;

    @Column({ name: 'year', type: 'int'})
    year: number;

    @Column({ name: 'month', type: 'text'})
    month: string;

    @Column({ name: 'projection', type: 'int'})
    projection: number;

    @Column({ name: 'is_real', type: 'boolean'})
    isReal: boolean;

    @Column({ name: 'id_commune', type: 'uuid' })
    @JoinColumn({ name: 'id_commune'})
    @ManyToOne(() => Communes, (commune) => commune.monthlyCommunalPopulationProjections)
    commune: Communes;
    
}