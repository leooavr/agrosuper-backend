import { Module } from '@nestjs/common';

import { AreasCategoryController } from "./areasCategory.controller";
import { AreasCategoryService } from "./areasCategory.service";
import { AreasCategoryRepository } from '../../repositories/areasCategory.repository';

@Module({
    imports: [],
    controllers: [AreasCategoryController],
    providers: [AreasCategoryService, AreasCategoryRepository]
})

export class AreasCategoryModule {};