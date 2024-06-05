import express from 'express';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.get(
  '/get-academic-departments',
  AcademicDepartmentControllers.getAllAcademicDepartments,
);

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getAcademicDepartmentById,
);

router.patch(
  '/:departmentId',
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
