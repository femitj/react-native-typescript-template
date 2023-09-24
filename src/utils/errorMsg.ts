const HandleError = (error: any) => {
  if (error?.data?.message === 'Validation Error!') {
    return Object.values(error?.data?.data)[0];
  } else {
    return error?.data?.message;
  }
};

export default HandleError;
