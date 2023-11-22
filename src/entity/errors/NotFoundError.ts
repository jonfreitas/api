import { ErrorType } from './ErrorType'

export class NotFoundError extends Error {
  constructor(message: string, details?: string) {
    super(message)
    this.name = ErrorType[ErrorType.NOT_FOUND]
    this.status = ErrorType.NOT_FOUND
    this.details = details
  }

  status: number

  details?: string
}
