import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Communes } from "./communes.entity";

@Entity()
export class District extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_district' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'id_commune', type: 'uuid' })
    @JoinColumn({ name: 'id_commune'})
    @ManyToOne(() => Communes, (commune) => commune.district)
    commune: Communes;

    
}