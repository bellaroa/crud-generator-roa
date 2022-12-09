import { Module } from '@nestjs/common';
import { DatabaseProviders } from './database.provider';

@Module({
  providers: [DatabaseProviders],
})
export class DatabaseModule {}
