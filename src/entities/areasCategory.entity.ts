import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Area } from "./areas.entity";

@Entity()
export class AreaCategory extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_area_category' })
    id: string;

    @Column({ name: 'name', type: 'text'})
    name: string;

    @OneToMany(() => Area, (area) => area.areaCategory)
    area: Area[];
}