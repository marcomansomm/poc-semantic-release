import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + ' from controller!';
  }

  @Get()
  getHelloCats(): string {
    return this.appService.getHelloCats() + ' from controller!';
  }

  @Get('cats')
  getCatsGreeting(): string {
    return this.appService.getHelloCats() + ' from controller!';
  }

  @Get('hello')
  getHelloGreeting(): string {
    return this.appService.getHello() + ' from controller!';
  }

  @Get('greet')
  getGreet(): string {
    return 'Greetings from controller!';
  }

  @Get('greet2')
  getGreet2(): string {
    return 'Greetings from controller! 2';
  }

  @Get('greet3')
  getGreet3(): string {
    return 'Greetings from controller! 3';
  }

  @Get('greet4')
  getGreet4(): string {
    return 'Greetings from controller! 4';
  }
}
