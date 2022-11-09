import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { Provinces } from './provinces.entity';
import { District } from "./districts.entity";
import { DeliveryZone } from './deliveryZones.entity';
import { Clients } from "./clients.entity";

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

    @OneToMany(() => District, (district) => district.commune)
    district: District[];

    @OneToMany(() => DeliveryZone, (deliveryZone) => deliveryZone.commune)
    deliveryZone: DeliveryZone[];

    @OneToMany(() => Clients, (clients) => clients.commune)
    clients: Clients[];

}