import { Controller, Get, Redirect, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {

  @Get()
  @Redirect('/public', 302) // This redirects to the /public route
  redirectToPublic() {
      // This method will redirect from the base URL to '/public'
    }
}
