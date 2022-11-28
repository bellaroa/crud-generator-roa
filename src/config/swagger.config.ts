import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Configuration, Swagger } from 'src/constants';

/**
 * @param {INestApplication} app
 */
const setupSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle(Swagger.TITLE)
    .setDescription(Swagger.DESCRIPTION)
    .setVersion(Swagger.VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, options);

  return SwaggerModule.setup(Configuration.GLOBAL_PREFIX, app, document);
};

export default setupSwagger;
