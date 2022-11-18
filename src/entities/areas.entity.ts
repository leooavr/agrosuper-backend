import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { AreasCategory } from "./areasCategory.entity";
import { Clients } from './clients.entity';
import { Districts } from './districts.entity';

@Entity()
export class Areas extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_area' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'surface', type: 'text'})
    surface: string;

    @Column({ name: 'is_urban', type: 'boolean'})
    isUrban: boolean;

    @Column({ name: 'participation', type: 'text'})
    participation: string;

    @Column({ name: 'id_area_category', type: 'uuid' })
    @JoinColumn({ name: 'id_area_category'})
    @ManyToOne(() => AreasCategory, (areaCategory) => areaCategory.area)
    areaCategory: AreasCategory;

    @Column({ name: 'id_district', type: 'uuid' })
    @JoinColumn({ name: 'id_district'})
    @ManyToOne(() => Districts, (district) => district.areas)
    district: Districts;

    @OneToMany(() => Clients, (clients) => clients.area)
    clients: Clients[];
}