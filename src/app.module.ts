import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import databaseConfig from './config/database/database.config';
import { DatabaseModule } from './config/database/database.module';
import { DatabaseProviders } from './config/database/database.provider';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseModule],
      useClass: DatabaseProviders,
      inject: [DatabaseProviders],
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
      cache: true,
      envFilePath:
        process.env.NODE_ENV === 'dev' ? '.env.development' : '.env.production',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
