import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (
  departmentData: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.create(departmentData);
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getAcademicDepartmentByIdFromDB = async (departmentId: string) => {
  const result =
    await AcademicDepartment.findById(departmentId).populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  departmentId: string,
  updatedDepartmentData: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(
    departmentId,
    updatedDepartmentData,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getAcademicDepartmentByIdFromDB,
  updateAcademicDepartmentIntoDB,
};
