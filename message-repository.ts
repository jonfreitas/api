import { logger } from '@sdk12/api'
import { buildClient, GrpcError, GrpcRepository } from '../grpc'
import { Message } from '@/models/message'

export class MessageRepository extends GrpcRepository {
  static build(): MessageRepository {
    const build = buildClient({
      proto: 'communication/messaging/v2/message.proto',
      ipAddress: process.env.MESSAGING_SERVER_IP,
    })
    return new MessageRepository(build)
  }

  async createMessage(message: Message): Promise<Message> {
    return new Promise((resolve, reject) => {
      try {
        this.client.CreateMessage(
          message,
          (error: GrpcError, response: Message) => {
            if (error) {
              return reject(this.formatError(error))
            }
            return resolve(response)
          }
        )
      } catch (err) {
        logger.error('CREATE_MESSAGE_ERROR', {
          err: err as Error,
          message,
        })
        reject(err)
      }
    })
  }
}
