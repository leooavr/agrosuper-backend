import { BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Regions extends BaseEntity {
    @Column({ name: 'region_number', type: 'int', primary: true })
    id: number;

    @Column({ name: 'name', type: 'text', nullable: true })
    name: string;
}