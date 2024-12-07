import { Module } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Costumer } from "../costumer/entities/costumer.entity";
import { Env } from "../env";

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async(config: ConfigService<Env, true>) => ({
      type: "postgres",
      host: config.get<string>("DB_HOST", { infer: true }),
      port: config.get<number>("DB_PORT", {infer: true}),
      username: config.get<string>("DB_USERNAME", {infer: true}),
      password: config.get<string>("DB_PASSWORD", {infer: true}),
      database: config.get<string>("DB_NAME", {infer: true}),
      entities: [Costumer],
      migrations: [__dirname + "/migrations/*.ts"],
      synchronize: false
    }),
    inject: [ConfigService],
  })],
  providers: [],
  controllers: [],
})
export class DbModule {}
