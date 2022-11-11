import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ProteinSector } from './proteinSectors.entity';

@Entity()
export class RealConsumptions extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_real_consumptions' })
    id: string;

    @Column({ name: 'year', type: 'int' })
    year: number;

    @Column({ name: 'month', type: 'text' })
    month: string;

    @Column({ name: 'consumption', type: 'int' })
    consumption: number;

    @Column({ name: 'id_protein_sector', type: 'uuid' })
    @JoinColumn({ name: 'id_protein_sector'})
    @ManyToOne(() => ProteinSector, (proteinSector) => proteinSector.realConsumptions)
    proteinSector: ProteinSector;

    
}