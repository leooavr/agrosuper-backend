import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Sales, Clients, ProteinSectors } from '../entities';
import { CreateSalesDto, UpdateSalesDto } from '../modules/sales/dto';

@Injectable()
export class SalesRepository {
  private salesRepository = dataSource.getRepository(Sales);
  public async getSales(): Promise<Sales[]> {
    try {
      return this.salesRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async saveSale(
    createSalesDto: CreateSalesDto,
    client: Clients,
    proteinSector: ProteinSectors,
  ): Promise<Sales> {
    try {
      const { year, month, salesKg, salesNeta } = createSalesDto;
      const sale = new Sales();

      sale.year = year;
      sale.month = month;
      sale.salesKg = salesKg;
      sale.salesNeta = salesNeta;
      sale.client = client;
      sale.proteinSector = proteinSector;
      return this.salesRepository.save(sale);
    } catch (error) {
      throw error;
    }
  }

  public async updateSale(
    id: string,
    updateSalesDto: UpdateSalesDto,
    client: Clients,
    proteinSector: ProteinSectors,
  ): Promise<Sales> {
    try {
      const { year, month, salesKg, salesNeta } = updateSalesDto;
      const sale = await this.salesRepository.findOneBy({ id });

      sale.year = year;
      sale.month = month;
      sale.salesKg = salesKg;
      sale.salesNeta = salesNeta;
      sale.client = client;
      sale.proteinSector = proteinSector;

      return this.salesRepository.save(sale);
    } catch (error) {
      throw error;
    }
  }

  public async deleteSale(id: string): Promise<Sales> {
    try {
      const sale = await this.salesRepository.findOneBy({ id });
      return this.salesRepository.remove(sale);
    } catch (error) {
      throw error;
    }
  }
}
