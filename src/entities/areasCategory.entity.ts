import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Areas } from "./areas.entity";

@Entity()
export class AreasCategory extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_area_category' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @OneToMany(() => Areas, (area) => area.areaCategory)
    area: Areas[];
}