import { Repository, EntityRepository } from "typeorm";
import { Injectable } from "@nestjs/common";

import { Provinces } from "../entities/provinces.entity";

@Injectable()
@EntityRepository(Provinces)
export class ProvincesRepository extends Repository<Provinces> {
   public async getProvinces(): Promise<Provinces[]> {
    try {
        return this.find();
    } catch (error) {
        throw error;
    }
   }

}