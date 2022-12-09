import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CONSTANT, SWAGGER } from 'src/constants';

/**
 * @param {INestApplication} app
 */
const setupSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle(SWAGGER.TITLE)
    .setDescription(SWAGGER.DESCRIPTION)
    .setVersion(SWAGGER.VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, options);

  return SwaggerModule.setup(CONSTANT.GLOBAL_PREFIX, app, document);
};

export default setupSwagger;
