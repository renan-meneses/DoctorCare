import { Request, Response } from 'express'
import { SubmitFeedbackUseCase } from '@/domain/useCases/submitFeedbackUseCase'
import { PrismaFeedbacksRepository } from '@/application/repositories/prisma/prismaFeedbacksRepository'
import { NodemailerAdapter } from '@/application/mail/nodemailerAdapter'
import { HttpCode } from '@/application/http/codes'

class FeedbackHandler {
  public async store(request: Request, response: Response) {
    const feedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerAdapter = new NodemailerAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      feedbackRepository,
      nodemailerAdapter
    )

    await submitFeedbackUseCase.execute(request.body)

    response.sendStatus(HttpCode.CREATED)
  }
}

const feedbackHandler = new FeedbackHandler()

export { feedbackHandler }
