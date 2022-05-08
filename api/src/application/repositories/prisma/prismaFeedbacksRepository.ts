import {
  FeedbackCreationData,
  FeedbacksRepository
} from '@/domain/adapters/repositories/feedbacksRepository'
import { prisma } from '@/application/prisma'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  public async create(data: FeedbackCreationData): Promise<void> {
    await prisma.feedback.create({ data })
  }
}
