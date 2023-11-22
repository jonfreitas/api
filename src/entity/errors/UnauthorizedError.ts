import { ErrorType } from './ErrorType'

export class UnauthorizedError extends Error {
  constructor(message: string, details?: string) {
    super(message)
    this.name = ErrorType[ErrorType.UNAUTHORIZED]
    this.status = ErrorType.UNAUTHORIZED
    this.details = details
  }

  status: number

  details?: string
}
