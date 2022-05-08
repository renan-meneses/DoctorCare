import { MailAdapter, MessageData } from '@/domain/adapters/mailAdapter'
import nodemailer from 'nodemailer'
import { pugEngine } from 'nodemailer-pug-engine'
import { resolve } from 'path'

export class NodemailerAdapter implements MailAdapter {
  private transportSettings = {
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    },
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT)
  }
  private transport = nodemailer.createTransport(this.transportSettings)

  constructor() {
    this.transport.use(
      'compile',
      pugEngine({
        pretty: true,
        templateDir: resolve(__dirname, 'templates')
      })
    )
  }

  public async send(messageData: MessageData): Promise<void> {
    try {
      await this.transport.sendMail(messageData)
    } catch (error) {
      Promise.reject()
    }
  }
}
