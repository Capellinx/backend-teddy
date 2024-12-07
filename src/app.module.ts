import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "./env";
import { DbModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    DbModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
