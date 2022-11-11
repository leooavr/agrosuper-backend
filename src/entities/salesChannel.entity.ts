import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clients } from './clients.entity';

@Entity()
export class SalesChannel extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_sales_channel' })
    id: string

    @Column({ name: 'name', type: 'text' })
    name: string

    @OneToMany(() => Clients, (clients) => clients.saleChannel)
    clients: Clients[];
}