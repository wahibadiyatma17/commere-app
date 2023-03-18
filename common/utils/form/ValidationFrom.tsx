export const getEmailValidationErrorMsg = (errorType: string) => {
  switch (errorType) {
    case 'minLength':
      return 'Minimal panjang karakter adalah 3';
    case 'maxLength':
      return 'Maksimal panjang karakter adalah 30';
    case 'required':
      return 'Id/email wajib diisi';
  }
};

export const getPasswordValidationErrorMsg = (errorType: string | undefined) => {
  if (errorType === undefined) return '';
  else
    switch (errorType) {
      case 'minLength':
        return 'Minimal panjang karakter adalah 3';
      case 'maxLength':
        return 'Maksimal panjang karakter adalah 10';
      case 'required':
        return 'Password wajib diisi';
      case 'validate':
        return 'Password minimal mengandung satu huruf kapital';
    }
};
