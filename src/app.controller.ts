import {Controller, Get, Redirect, Res} from '@nestjs/common';
import {Response} from 'express';
import {join} from 'path';

@Controller()
export class AppController {

    @Get()
    @Redirect('/public', 302) // This redirects to the /public route
    redirectToPublic() {
        // This method will redirect from the base URL to '/public'
    }

    @Get('ad01/') // Handle the /ad01/ URL
    getAd01(@Res() res: Response) {
        return res.sendFile(join(__dirname, '..', 'public', 'ad01.html'));
    }

    @Get('ad02/') // Handle the /ad01/ URL
    getAd02(@Res() res: Response) {
        return res.sendFile(join(__dirname, '..', 'public', 'ad02.html'));
    }

    @Get('ad03/') // Handle the /ad01/ URL
    getAd03(@Res() res: Response) {
        return res.sendFile(join(__dirname, '..', 'public', 'ad03.html'));
    }

    @Get('ad04/') // Handle the /ad01/ URL
    getAd04(@Res() res: Response) {
        return res.sendFile(join(__dirname, '..', 'public', 'ad04.html'));
    }
}
