/**
 * Admin Validation utility functions
 */

export const AdminValidationUtils = {
  // Email validation
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  // Password validation
  isValidPassword: (password: string): boolean => {
    // Min 8 characters, at least 1 uppercase, 1 lowercase, 1 number
    if (password.length < 8) return false
    if (!/[A-Z]/.test(password)) return false
    if (!/[a-z]/.test(password)) return false
    if (!/[0-9]/.test(password)) return false
    return true
  },

  // Admin name validation
  isValidAdminName: (name: string): boolean => {
    return name.trim().length >= 2 && name.trim().length <= 100
  },

  // Get validation error message
  getErrorMessage: (field: string, type: string): string => {
    const messages: Record<string, Record<string, string>> = {
      email: {
        invalid: 'Email хаяг буруу байна',
        required: 'Email оруулна уу',
      },
      password: {
        invalid:
          'Нууц үг 8-аас дээш урт, том үсэг, жижиг үсэг, тоо агуулна уу',
        required: 'Нууц үг оруулна уу',
        tooShort: 'Нууц үг дор хаяж 8 тэмдэгт байх ёстой',
        noUppercase: 'Нууц үг том үсэг агуулна уу',
        noLowercase: 'Нууц үг жижиг үсэг агуулна уу',
        noNumber: 'Нууц үг тоо агуулна уу',
      },
      name: {
        invalid: 'Нэр 2-100 тэмдэгт байх ёстой',
        required: 'Нэр оруулна уу',
      },
    }

    return messages[field]?.[type] || 'Буруу өгөгдөл'
  },

  // Validate all fields
  validateForm: (data: Record<string, string>): Record<string, string> => {
    const errors: Record<string, string> = {}

    if (data.email && !AdminValidationUtils.isValidEmail(data.email)) {
      errors.email = AdminValidationUtils.getErrorMessage('email', 'invalid')
    }

    if (data.password && !AdminValidationUtils.isValidPassword(data.password)) {
      errors.password = AdminValidationUtils.getErrorMessage('password', 'invalid')
    }

    if (data.name && !AdminValidationUtils.isValidAdminName(data.name)) {
      errors.name = AdminValidationUtils.getErrorMessage('name', 'invalid')
    }

    return errors
  },
}
