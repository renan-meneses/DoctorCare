export interface MessageData {
  ctx: Record<string, any>
  from: string
  subject: string
  to: string
  template: string
}

export interface MailAdapter {
  send(messageData: MessageData): Promise<void>
}
