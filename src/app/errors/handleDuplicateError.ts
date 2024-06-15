import { TErrorSources, TGenericErrorResponse } from '../interfaces/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err?.message?.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exist...!`,
    },
  ];

  return {
    statusCode: 400,
    message: 'Duplicate Error',
    errorSources,
  };
};

export default handleDuplicateError;
