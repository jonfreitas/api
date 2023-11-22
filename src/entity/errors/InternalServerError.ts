import { ErrorType } from './ErrorType'

export class InternalServerError extends Error {
  constructor(
    message = 'Houve um problema mas já estamos resolvendo',
    details = 'Aguarde alguns instantes e tente novamente.'
  ) {
    super(message)
    this.name = ErrorType[ErrorType.INTERNAL_SERVER_ERROR]
    this.status = ErrorType.INTERNAL_SERVER_ERROR
    this.details = details
  }

  status: number

  details?: string
}
