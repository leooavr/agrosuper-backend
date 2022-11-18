import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { SalesChannel } from './salesChannel.entity';
import { Communes } from './communes.entity';
import { DeliveryZones } from './deliveryZones.entity';
import { Areas } from './areas.entity';
import { Sales } from './sales.entity';

@Entity()
export class Clients extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id_client' })
  id: string;

  @Column({ name: 'rut', type: 'text' })
  rut: string;

  @Column({ name: 'address', type: 'text' })
  address: string;

  @Column({ name: 'lat', type: 'text' })
  lat: string;

  @Column({ name: 'long', type: 'text' })
  long: string;

  @Column({ name: 'social_reason', type: 'text' })
  socialReason: string;

  @Column({ name: 'local_client', type: 'bigint' })
  localClient: number;

  @Column({ name: 'id_commune', type: 'uuid' })
  @JoinColumn({ name: 'id_commune' })
  @ManyToOne(() => Communes, (commune) => commune.clients)
  commune: Communes;

  @Column({ name: 'id_sales_channel', type: 'uuid' })
  @JoinColumn({ name: 'id_sales_channel' })
  @ManyToOne(() => SalesChannel, (saleChannel) => saleChannel.clients)
  saleChannel: SalesChannel;

  @Column({ name: 'id_delivery_zone', type: 'uuid' })
  @JoinColumn({ name: 'id_delivery_zone' })
  @ManyToOne(() => DeliveryZones, (deliveryZone) => deliveryZone.clients)
  deliveryZone: DeliveryZones;

  @Column({ name: 'id_area', type: 'uuid' })
  @JoinColumn({ name: 'id_area' })
  @ManyToOne(() => Areas, (area) => area.clients)
  area: Areas;

  @OneToMany(() => Sales, (sales) => sales.client)
  sales: Sales[];
}
