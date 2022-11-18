import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Clients } from './clients.entity';
import { ProteinSectors } from './proteinSectors.entity';

@Entity()
export class Sales extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_sales' })
    id: string;

    @Column({ name: 'year', type: 'int' })
    year: number;

    @Column({ name: 'month', type: 'text' })
    month: string;

    @Column({ name: 'sales_kg', type: 'int' })
    salesKg: number;

    @Column({ name: 'sales_neta', type: 'int' })
    salesNeta: number;

    @Column({ name: 'id_protein_sector', type: 'uuid' })
    @JoinColumn({ name: 'id_protein_sector' })
    @ManyToOne(() => ProteinSectors, (proteinSector) => proteinSector.sales)
    proteinSector: ProteinSectors;

    @Column({ name: 'id_client', type: 'uuid' })
    @JoinColumn({ name: 'id_client' })
    @ManyToOne(() => Clients, (client) => client.sales)
    client: Clients;
}