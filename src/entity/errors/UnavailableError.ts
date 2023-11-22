import { ErrorType } from './ErrorType'

export class UnavailableError extends Error {
  constructor(
    message = 'Houve um problema mas já estamos resolvendo',
    details = 'Aguarde alguns instantes e tente novamente.'
  ) {
    super(message)
    this.name = ErrorType[ErrorType.UNAVAILABLE]
    this.status = ErrorType.UNAVAILABLE
    this.details = details
  }

  status: number

  details?: string
}
