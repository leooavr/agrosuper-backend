import { Repository, EntityRepository } from "typeorm";
import { Injectable } from "@nestjs/common";

import { SalesChannel } from "../entities/salesChannel.entity";

@Injectable()
@EntityRepository(SalesChannel)
export class SalesChannelRepository extends Repository<SalesChannel> {
   public async getSalesChannel(): Promise<SalesChannel[]> {
    try {
        return this.find();
    } catch (error) {
        throw error;
    }
   }

}