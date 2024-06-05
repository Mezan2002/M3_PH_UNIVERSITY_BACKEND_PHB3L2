import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department must be a string!',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be a string!',
    }),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic department must be a string!',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic faculty must be a string!',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
