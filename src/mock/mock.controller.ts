import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('mock')
export class MockController {
    @Get()
    getMock(@Res() response: Response) {
        // Send a mock response
        response.json({ message: 'This is a mock GET response' });
    }

    @Post()
    postMock(@Req() request: Request, @Res() response: Response) {
        // Handle the POST request and send a mock response
        console.log(request.body); // Log the request body for debugging
        response.json({ message: 'This is a mock POST response' });
    }

    @Post('/rtb')
        mockRTB(@Req() request: Request, @Res() response: Response) {
            // Log the incoming request for debugging
            console.log('Received RTB Request:', request.body);

            // Mock RTB response
            const mockRTBResponse = {
                id: "12345",
                seatbid: [
                    {
                        bid: [
                            {
                                id: "1",
                                impid: "1",
                                price: 2.50,
                                adid: "ad1",
                                adm: `
                                      <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                                          <h3 style="color: #4A90E2;">Sample Ad</h3>
                                          <img src="/images/img.png" alt="Ad Image" style="max-width: 100%; height: auto;">
                                          <p style="color: #333;">Check out this amazing product!</p>
                                          <a href="https://example.com" target="_blank" style="display: inline-block; background-color: #4A90E2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Learn More</a>
                                      </div>`,
                                adomain: ["main.dfxeslbx8pyoe.amplifyapp.com"],
                                iurl: "http://advertiserdomain.com/adimage.jpg",
                                crid: "creative1",
                                w: 300,
                                h: 250
                            }
                        ],
                        seat: "seat1"
                    }
                ],
                bidid: "abcde12345",
                cur: "USD"
            };

            // Send the mock response
            response.json(mockRTBResponse);
        }
}