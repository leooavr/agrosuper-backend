import { Repository, EntityRepository } from "typeorm";
import { Injectable } from "@nestjs/common";

import { Regions } from "../entities/regions.entity";

@Injectable()
@EntityRepository(Regions)
export class RegionsRepository extends Repository<Regions> {
   public async getRegions(): Promise<Regions[]> {
    try {
        return this.find();
    } catch (error) {
        throw error;
    }
   }

}