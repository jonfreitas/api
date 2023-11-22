import { ErrorType } from './ErrorType'

export class ValidationError extends Error {
  constructor(message: string, details?: string) {
    super(message)
    this.name = ErrorType[ErrorType.BAD_REQUEST]
    this.status = ErrorType.BAD_REQUEST
    this.details = details
  }

  status: number

  details?: string
}
