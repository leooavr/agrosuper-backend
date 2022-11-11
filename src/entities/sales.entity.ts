import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Clients } from './clients.entity';
import { ProteinSector } from './proteinSectors.entity';

@Entity()
export class Sales extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_sales' })
    id: string;

    @Column({ name: 'year', type: 'int' })
    year: number;

    @Column({ name: 'month', type: 'text' })
    month: string;

    @Column({ name: 'sales_kg', type: 'text' })
    sales_kg: string;

    @Column({ name: 'sales_neta', type: 'text' })
    sales_neta: string;

    @Column({ name: 'id_protein_sector', type: 'uuid' })
    @JoinColumn({ name: 'id_protein_sector' })
    @ManyToOne(() => ProteinSector, (proteinSector) => proteinSector.sales)
    proteinSector: ProteinSector;

    @Column({ name: 'id_client', type: 'uuid' })
    @JoinColumn({ name: 'id_client' })
    @ManyToOne(() => Clients, (client) => client.sales)
    client: Clients;
}