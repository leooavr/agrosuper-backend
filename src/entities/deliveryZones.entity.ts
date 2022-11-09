import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { Communes } from './communes.entity';
import { Clients } from './clients.entity';

@Entity()
export class DeliveryZone extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_delivery_zone' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'id_commune', type: 'uuid' })
    @JoinColumn({ name: 'id_commune'})
    @ManyToOne(() => Communes, (commune) => commune.deliveryZone)
    commune: Communes;

    @OneToMany(() => Clients, (clients) => clients.deliveryZone)
    clients: Clients[];
}