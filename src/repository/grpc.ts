import path from 'path'
import { status } from '@grpc/grpc-js'
import { Engine } from '@sdk12/dataserver'
import { logger } from '@sdk12/api'
import {
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
  UnavailableError,
  ValidationError,
} from '../entity/errors'

export type GrpcClient = ReturnType<typeof Engine.prototype.setClient>

export type GrpcConfig = {
  proto: string
  ipAddress: string
}

export type GrpcError = {
  code: number
  message: string
  details: string
}

export const buildClient = (
  { proto, ipAddress }: GrpcConfig,
  protoPath = path.join(
    __dirname,
    '..',
    '..',
    'node_modules',
    '@sdk12',
    'protos'
  )
): GrpcClient => {
  const file = path.join(protoPath, proto)
  const engine = new Engine()

  logger.debug('GRPC: loading proto', { file, ipAddress })

  return engine.setClient(ipAddress, file)
}

export const formatMessage = (message: string): string => {
  return message?.replace(/^\d+\s[^:]+:\s*/, '') || 'Internal Server Error'
}

export abstract class GrpcRepository {
  protected client: GrpcClient

  constructor(client: GrpcClient) {
    this.client = client
  }

  formatError = (grpcError: GrpcError): Error => {
    switch (grpcError?.code) {
      case status.ALREADY_EXISTS:
      case status.INVALID_ARGUMENT:
      case status.FAILED_PRECONDITION:
      case status.OUT_OF_RANGE:
        logger.debug('GRPC_DEBUG: ' + grpcError?.message)
        return new ValidationError(formatMessage(grpcError?.message))
      case status.NOT_FOUND:
        logger.debug('GRPC_DEBUG: ' + grpcError?.message)
        return new NotFoundError(formatMessage(grpcError?.message))
      case status.UNAVAILABLE:
        logger.error('GRPC_ERROR: ' + grpcError?.message, grpcError)
        return new UnavailableError(formatMessage(grpcError?.message))
      case status.DEADLINE_EXCEEDED:
        logger.error('GRPC_ERROR: ' + grpcError?.message, grpcError)
        return new UnavailableError(formatMessage(grpcError?.message))
      case status.UNAUTHENTICATED:
        logger.error('GRPC_ERROR: ' + grpcError?.message, grpcError)
        return new UnauthorizedError(formatMessage(grpcError?.message))
      default: {
        logger.error('GRPC_ERROR: ' + grpcError?.message, grpcError)
        return new InternalServerError()
      }
    }
  }
}
