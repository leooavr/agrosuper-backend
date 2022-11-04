import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Provinces } from './provinces.entity';

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

}