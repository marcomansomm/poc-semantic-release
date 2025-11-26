import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getHelloCats(): string {
    return this.appService.getHelloCats() + ' from controller!';
  }

  @Get('cats')
  getCatsGreeting(): string {
    return this.appService.getHelloCats();
  }
}
