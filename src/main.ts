import { ConfigService } from "@nestjs/config";
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from './app.module';
import { Env } from "./env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Manager control costumers")
    .setTitle("The api to managers control your costumers")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);
  
  
  app.enableCors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  });
  
  const config = app.get<ConfigService<Env, true>>(ConfigService);
  const port = config.get<Env>('PORT', { infer: true});

  await app.listen(port);
}
bootstrap();
