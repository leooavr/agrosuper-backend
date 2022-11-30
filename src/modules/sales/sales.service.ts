import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { Sales } from '../../entities/sales.entity';
import { SalesRepository } from '../../repositories/sales.repository';
import { CreateSalesDto, UpdateSalesDto } from './dto';
import { ClientsRepository } from '../../repositories/clients.repository';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';

@Injectable()
export class SalesService {
  private logger: Logger = new Logger(SalesService.name);

  constructor(
    private salesRepository: SalesRepository,
    private readonly clientRepository: ClientsRepository,
    private readonly proteinSectorRepository: ProteinSectorsRepository,
  ) {}

  async getSales(): Promise<Sales[]> {
    try {
      this.logger.debug('getting sales');
      return this.salesRepository.getSales();
    } catch (error) {
      throw error;
    }
  }

  async createSale(createSalesDto: CreateSalesDto): Promise<Sales> {
    try {
      this.logger.debug('saving Sale');
      const { year, month, salesKg, salesNeta, idClient, idProteinSector } =
        createSalesDto;

      if (!year) {
        throw new HttpException(
          `Param year is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!month) {
        throw new HttpException(
          `Param month is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!salesKg) {
        throw new HttpException(
          `Param salesKg is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!salesNeta) {
        throw new HttpException(
          `Param salesNeta is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idClient) {
        throw new HttpException(
          `Param idClient is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const client = await this.clientRepository.getClientById(idClient);
      if (!client) {
        throw new HttpException(
          `Client with id=${idClient} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idProteinSector) {
        throw new HttpException(
          `Param idProteinSector is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const proteinSector =
        await this.proteinSectorRepository.getProteinSectorById(
          idProteinSector,
        );
      if (!proteinSector) {
        throw new HttpException(
          `Protein Sector with id=${idProteinSector} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.salesRepository.saveSale(
        createSalesDto,
        client,
        proteinSector,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateSale(id: string, updateSalesDto: UpdateSalesDto): Promise<Sales> {
    try {
      this.logger.debug('updating Sale');
      const { year, month, salesKg, salesNeta, idClient, idProteinSector } =
        updateSalesDto;

      if (!year) {
        throw new HttpException(
          `Param year is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!month) {
        throw new HttpException(
          `Param month is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!salesKg) {
        throw new HttpException(
          `Param salesKg is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!salesNeta) {
        throw new HttpException(
          `Param salesNeta is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idClient) {
        throw new HttpException(
          `Param idClient is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const client = await this.clientRepository.getClientById(idClient);
      if (!client) {
        throw new HttpException(
          `Client with id=${idClient} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idProteinSector) {
        throw new HttpException(
          `Param idProteinSector is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const proteinSector =
        await this.proteinSectorRepository.getProteinSectorById(
          idProteinSector,
        );
      if (!proteinSector) {
        throw new HttpException(
          `Protein Sector with id=${idProteinSector} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.salesRepository.updateSale(
        id,
        updateSalesDto,
        client,
        proteinSector,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteSale(id: string): Promise<Sales> {
    try {
      this.logger.debug('deleting Sale');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.salesRepository.deleteSale(id);
    } catch (error) {
      throw error;
    }
  }
}
