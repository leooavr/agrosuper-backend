import { Repository, EntityRepository } from "typeorm";
import { Injectable } from "@nestjs/common";

import { Communes } from "../entities/communes.entity";

@Injectable()
@EntityRepository(Communes)
export class CommunesRepository extends Repository<Communes> {
   public async getCommunes(): Promise<Communes[]> {
    try {
        return this.find();
    } catch (error) {
        throw error;
    }
   }

}