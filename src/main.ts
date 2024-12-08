import { ConfigService } from "@nestjs/config";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Env } from "./env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = app.get<ConfigService<Env, true>>(ConfigService);
  const port = config.get<Env>('PORT', { infer: true});
  
  app.enableCors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  });
  
  await app.listen(port);
}
bootstrap();
