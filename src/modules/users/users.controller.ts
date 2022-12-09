import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('logout')
  async logout() {
    const result = await this.usersService.logout();

    return result;
  }
}
