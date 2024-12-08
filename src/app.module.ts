import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "./env";
import { DbModule } from './db/db.module';
import { CostumerModule } from './costumer/costumer.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    DbModule,
    CostumerModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
