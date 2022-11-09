import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { AreaCategory } from "./areasCategory.entity";
import { Clients } from './clients.entity';

@Entity()
export class Area extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_area' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'surface', type: 'text'})
    surface: string;

    @Column({ name: 'isUrban', type: 'boolean'})
    isUrban: boolean;

    @Column({ name: 'participation', type: 'text'})
    participation: string;

    @Column({ name: 'id_area_category', type: 'uuid' })
    @JoinColumn({ name: 'id_area_category'})
    @ManyToOne(() => AreaCategory, (areaCategory) => areaCategory.area)
    areaCategory: AreaCategory;

    @OneToMany(() => Clients, (clients) => clients.area)
    clients: Clients[];
}