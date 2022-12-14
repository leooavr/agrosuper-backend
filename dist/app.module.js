"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = require("dotenv");
const modules_1 = require("./modules");
const entities_1 = require("./entities");
dotenv.config();
const { TYPEORM_HOST, TYPEORM_USERNAME, TYPEORM_PASSWORD, TYPEORM_DATABASE, TYPEORM_SYNCHRONIZE, } = process.env;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            modules_1.CommunesModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: TYPEORM_HOST,
                username: TYPEORM_USERNAME,
                password: TYPEORM_PASSWORD,
                database: TYPEORM_DATABASE,
                entities: [entities_1.Provinces, entities_1.Regions, entities_1.Communes, entities_1.SalesChannel],
                synchronize: TYPEORM_SYNCHRONIZE == 'true' ? true : false,
                retryDelay: 3000,
                retryAttempts: 10,
                keepConnectionAlive: true,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map