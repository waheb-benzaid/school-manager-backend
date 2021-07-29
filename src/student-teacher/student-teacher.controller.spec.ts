import { Test, TestingModule } from '@nestjs/testing';
import { StudentTeacherController } from './student-teacher.controller';

describe('StudentTeacherController', () => {
  let controller: StudentTeacherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentTeacherController],
    }).compile();

    controller = module.get<StudentTeacherController>(StudentTeacherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
