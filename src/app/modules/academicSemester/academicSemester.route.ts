import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

// create academic semester
router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

// get academic semester
router.get(
  '/get-academic-semester',
  AcademicSemesterControllers.getAcademicSemester,
);

// get academic semester by id
router.get('/:semesterId', AcademicSemesterControllers.getAcademicSemesterById);

// update academic semester
router.patch(
  '/:semesterId',
  AcademicSemesterControllers.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
