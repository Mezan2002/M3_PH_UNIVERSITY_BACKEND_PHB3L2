import { academicSemesterNameAndCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameAndCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code!');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getAcademicSemesterByIDFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  semesterId: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameAndCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code!');
  }

  const result = await AcademicSemester.findByIdAndUpdate(semesterId, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getAcademicSemesterByIDFromDB,
  updateAcademicSemesterIntoDB,
};
