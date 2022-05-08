import { FeedbacksRepository } from '@/domain/adapters/repositories/feedbacksRepository'
import { MailAdapter } from '../adapters/mailAdapter'

interface Request {
  description: string
  screenshot?: string
  type: string
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  public async execute(data: Request) {
    if (!data.description) throw new Error('Missing feedback description.::400')
    if (!data.type) throw new Error('Missing feedback type.::400')

    await this.feedbacksRepository.create(data)
    await this.mailAdapter.send({
      ctx: {
        type: data.type,
        description: data.description
      },
      from: 'Equipe Feedget <oi@feedget.com>',
      template: 'feedback',
      subject: 'Novo feedback',
      to: 'Erick Gabriel <erick.gsmachado@gmail.com>'
    })
  }
}
