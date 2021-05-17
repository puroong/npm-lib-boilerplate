import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('sum test', () => {
  it('1+1 = 2', () => {
    expect(1 + 1).toEqual(2);
  });
});
