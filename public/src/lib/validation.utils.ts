/**
 * Validation utility functions
 */

export const ValidationUtils = {
  // Email validation
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  // Phone validation (Mongolia format)
  isValidPhone: (phone: string): boolean => {
    // Remove spaces and dashes
    const cleanPhone = phone.replace(/[\s\-]/g, '')
    // Mongolia phone: +976XXXXXXXXXX or 976XXXXXXXXXX or 89XXXXXXXX
    const phoneRegex = /^(\+976|976|89)\d{8}$/
    return phoneRegex.test(cleanPhone)
  },

  // Email or Phone validation
  isValidEmailOrPhone: (value: string): boolean => {
    return ValidationUtils.isValidEmail(value) || ValidationUtils.isValidPhone(value)
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

  // Name validation
  isValidName: (name: string): boolean => {
    return name.trim().length >= 2 && name.trim().length <= 100
  },

  // Address validation
  isValidAddress: (address: string): boolean => {
    return address.trim().length >= 5 && address.trim().length <= 200
  },

  // Get validation error message
  getErrorMessage: (field: string, type: string): string => {
    const messages: Record<string, Record<string, string>> = {
      email: {
        invalid: 'Email хаяг буруу байна',
        required: 'Email оруулна уу',
      },
      phone: {
        invalid: 'Утасны дугаар буруу байна (89XXXXXXXX эсвэл +97689XXXXXXXX)',
        required: 'Утасны дугаар оруулна уу',
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
      address: {
        invalid: 'Хаяг 5-200 тэмдэгт байх ёстой',
        required: 'Хаяг оруулна уу',
      },
    }

    return messages[field]?.[type] || 'Буруу өгөгдөл'
  },

  // Validate all fields
  validateForm: (data: Record<string, string>): Record<string, string> => {
    const errors: Record<string, string> = {}

    if (data.email && !ValidationUtils.isValidEmail(data.email)) {
      errors.email = ValidationUtils.getErrorMessage('email', 'invalid')
    }

    if (data.phone && !ValidationUtils.isValidPhone(data.phone)) {
      errors.phone = ValidationUtils.getErrorMessage('phone', 'invalid')
    }

    if (data.password && !ValidationUtils.isValidPassword(data.password)) {
      errors.password = ValidationUtils.getErrorMessage('password', 'invalid')
    }

    if (data.name && !ValidationUtils.isValidName(data.name)) {
      errors.name = ValidationUtils.getErrorMessage('name', 'invalid')
    }

    if (data.address && !ValidationUtils.isValidAddress(data.address)) {
      errors.address = ValidationUtils.getErrorMessage('address', 'invalid')
    }

    return errors
  },
}
