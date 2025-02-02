const errors = {
  // 400 Errors
  EMAIL_USED: '',
  INVALID_PASSWORD: '',
  PASSWORD_REQUIRED: '',
  PHONE_NUMBER_USED: '',
  REG_NUMBER_REQUIRED: '',
  REG_NUMBER_USED: '',
  USER_DELETED: '',
  USER_DEPARTMENT_REQUIRED: '',
  USER_EMAIL_REQUIRED: '',
  USER_INFO_NOT_MATCHED: '',
  USER_INFO_REQUIRED: '',
  USER_NAME_REQUIRED: '',
  USER_PHONE_REQUIRED: '',
  CONTEST_USER_DUPLICATED: '',

  // 401 Errors
  ACCESS_TOKEN_EXPIRED: '',
  ACCESS_TOKEN_REQUIRED: '',
  INVALID_ACCESS_TOKEN: '',
  INVALID_REFRESH_TOKEN: '',
  LOGIN_REQUIRED: '',
  REFRESH_TOKEN_EXPIRED: '',
  USER_ACCOUNT_DELETED: '',
  TOKEN_REQUIRED: '',

  // 403 Errors
  FORBIDDEN: '',

  // 404 Errors
  NOT_FOUND: '',
  USER_EMAIL_NOT_FOUND: '',
  USER_INFO_NOT_FOUND: '',
  USER_NOT_FOUND: '',

  // 500 Errors
  SERVER_ERROR: ''
};

Object.keys(errors).forEach(key => errors[key] = key);

export const ERROR_CODES = errors;
