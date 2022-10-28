import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provinces extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', type: 'text', nullable: true })
    name: string;
}