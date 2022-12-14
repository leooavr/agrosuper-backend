import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';

import { BranchOffices } from '../../entities/branchOffices.entity';
import { BranchOfficesRepository } from '../../repositories/branchOffices.repository';
import { CreateBranchOfficesDto, UpdateBranchOfficesDto } from './dto';

@Injectable()
export class BranchOfficesService {
  private logger: Logger = new Logger(BranchOfficesService.name);

  constructor(private branchOfficesRepository: BranchOfficesRepository) {}

  async getBranchOffices(): Promise<BranchOffices[]> {
    try {
      this.logger.debug('getting branch offices');
      return this.branchOfficesRepository.getBranchOffices();
    } catch (error) {
      throw error;
    }
  }

  async createBranchOffice(
    createBranchOfficesDto: CreateBranchOfficesDto,
  ): Promise<BranchOffices> {
    try {
      this.logger.debug('saving branch office');
      const { id, name } = createBranchOfficesDto;

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
      return this.branchOfficesRepository.saveBranchOffice(
        createBranchOfficesDto,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateBranchOffice(
    id: string,
    updateBranchOfficesDto: UpdateBranchOfficesDto,
  ): Promise<BranchOffices> {
    try {
      this.logger.debug('updating branch office');
      const { name } = updateBranchOfficesDto;
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
      return this.branchOfficesRepository.updateBranchOffice(
        id,
        updateBranchOfficesDto,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteBranchOffice(id: string): Promise<BranchOffices> {
    try {
      this.logger.debug('deleting branch office');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.branchOfficesRepository.deleteBranchOffice(id);
    } catch (error) {
      throw error;
    }
  }
}
