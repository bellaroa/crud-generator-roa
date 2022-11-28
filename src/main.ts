import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupSwagger from './config/swagger.config';
import { Configuration } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(Configuration.GLOBAL_PREFIX);

  setupSwagger(app);

  await app.listen(Configuration.PORT);
}
bootstrap();
