import { MailAdapter, MessageData } from '@/domain/adapters/mailAdapter'

export class EmailAdapter implements MailAdapter {
  async send(messageData: MessageData): Promise<void> {}
}
