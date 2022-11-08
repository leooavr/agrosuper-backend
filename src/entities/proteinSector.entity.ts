import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProteinSector extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_proteinsector' })
    id: string;

    @Column({ name: 'name', type: 'text' })
    name: string;
}