import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupSwagger from './common/swagger/swagger.service';
import { CONSTANT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(CONSTANT.GLOBAL_PREFIX);

  setupSwagger(app);

  await app.listen(CONSTANT.PORT);
}

bootstrap();
