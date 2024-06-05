import express from 'express';
import { AcademicFacultyControllers } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get(
  '/get-academic-faculties',
  AcademicFacultyControllers.getAllAcademicFaculties,
);

router.get('/:facultyId', AcademicFacultyControllers.getAcademicFacultyById);

router.patch('/:facultyId', AcademicFacultyControllers.updateAcademicFaculty);

export const AcademicFacultyRoutes = router;
