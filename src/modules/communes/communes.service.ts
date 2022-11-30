import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { Communes } from '../../entities/communes.entity';
import { CommunesRepository } from '../../repositories/communes.repository';
import { CreateCommunesDto, UpdateCommunesDto } from './dto';
import { BranchOfficesRepository } from '../../repositories/branchOffices.repository';
import { ProvincesRepository } from '../../repositories/provinces.repository';

@Injectable()
export class CommunesService {
  private logger: Logger = new Logger(CommunesService.name);

  constructor(
    private communesRepository: CommunesRepository,
    private readonly provinceRepository: ProvincesRepository,
    private readonly branchOfficeRepository: BranchOfficesRepository,
  ) {}

  async getCommunes(): Promise<Communes[]> {
    try {
      this.logger.debug('getting communes');
      return this.communesRepository.getCommunes();
    } catch (error) {
      throw error;
    }
  }

  async createCommune(createCommuneDto: CreateCommunesDto): Promise<Communes> {
    try {
      this.logger.debug('saving commune');
      const { id, name, idProvince, idBranchOffice } = createCommuneDto;

      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idProvince) {
        throw new HttpException(
          `Param idProvince is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idBranchOffice) {
        throw new HttpException(
          `Param idBranchOffice is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const province = await this.provinceRepository.getProvinceById(
        idProvince,
      );
      if (!province) {
        throw new HttpException(
          `Province with id=${idProvince} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const branchOffice =
        await this.branchOfficeRepository.getBranchOfficeById(idBranchOffice);
      if (!branchOffice) {
        throw new HttpException(
          `Branch Office with id=${idBranchOffice} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.communesRepository.saveCommune(
        createCommuneDto,
        province,
        branchOffice,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateCommune(
    id: number,
    updateCommunesDto: UpdateCommunesDto,
  ): Promise<Communes> {
    try {
      this.logger.debug('updating commune');
      const { id, name, idProvince, idBranchOffice } = updateCommunesDto;
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idProvince) {
        throw new HttpException(
          `Param idProvince is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idBranchOffice) {
        throw new HttpException(
          `Param idBrancOffice is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const province = await this.provinceRepository.getProvinceById(
        idProvince,
      );
      if (!province) {
        throw new HttpException(
          `Province with id=${idProvince} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const branchOffice =
        await this.branchOfficeRepository.getBranchOfficeById(idBranchOffice);
      if (!branchOffice) {
        throw new HttpException(
          `Branch Office with id=${idBranchOffice} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.communesRepository.updateCommune(
        id,
        updateCommunesDto,
        province,
        branchOffice,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteCommune(id: number): Promise<Communes> {
    try {
      this.logger.debug('deleting commune');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.communesRepository.deleteCommune(id);
    } catch (error) {
      throw error;
    }
  }
}
