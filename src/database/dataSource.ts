import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Provinces, Regions, Communes, SalesChannel, ProteinSector } from '../entities';

dotenv.config();

const {
    TYPEORM_HOST,
    TYPEORM_USERNAME,
    TYPEORM_PASSWORD,
    TYPEORM_DATABASE,
    TYPEORM_PORT
} = process.env;

export const connectionSource = new DataSource({
    type: 'postgres',
    host: TYPEORM_HOST,
    port: +TYPEORM_PORT,
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
    logging: true,
    synchronize: false,
    entities: [Provinces, Regions, Communes, SalesChannel, ProteinSector],
    migrations: ['src/migrations/*.ts'],
});

export default connectionSource;