import { DataSource } from 'typeorm';
import { Communes } from '../../entities';

export const communesProviders = [
  {
    provide: 'COMMUNES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Communes),
    inject: ['DATA_SOURCE'],
  },
];
