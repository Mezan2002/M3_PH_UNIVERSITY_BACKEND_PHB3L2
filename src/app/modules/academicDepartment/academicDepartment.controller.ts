import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepartmentServices } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department created successfully',
      data: result,
    });
  },
);

const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Departments retrieved successfully',
      data: result,
    });
  },
);

const getAcademicDepartmentById = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentServices.getAcademicDepartmentByIdFromDB(
        departmentId,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department retrived by ID successfully',
      data: result,
    });
  },
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const updatedDepartmentData = req.body;
    const result =
      await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
        departmentId,
        updatedDepartmentData,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department updated successfully',
      data: result,
    });
  },
);

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getAcademicDepartmentById,
  updateAcademicDepartment,
};
