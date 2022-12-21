import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

const availableGuards = [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
];

export default availableGuards;
