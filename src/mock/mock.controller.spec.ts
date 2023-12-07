import { Test, TestingModule } from '@nestjs/testing';
import { MockController } from './mock.controller';
import { Response } from 'express';

describe('MockController', () => {
  let controller: MockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockController],
    }).compile();

    controller = module.get<MockController>(MockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMock', () => {
    it('should return a mock GET response', () => {
      const mockResponse = {
        send: jest.fn().mockReturnThis(),
      } as unknown as Response;

      controller.getMock(mockResponse);
      expect(mockResponse.send).toHaveBeenCalledWith('This is a mock GET response');
    });
  });

  describe('postMock', () => {
    it('should return a mock POST response', () => {
      const mockRequest = {
        body: {},
      };
      const mockResponse = {
        json: jest.fn().mockReturnThis(),
      } as unknown as Response;

      controller.postMock(mockRequest as any, mockResponse);
      expect(mockResponse.json).toHaveBeenCalledWith({ message: 'This is a mock POST response' });
    });
  });
});
