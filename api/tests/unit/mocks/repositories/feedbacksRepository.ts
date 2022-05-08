import {
  FeedbackCreationData,
  FeedbacksRepository
} from '@/domain/adapters/repositories/feedbacksRepository'

export class InMemoryFeedbacksRepository implements FeedbacksRepository {
  public async create(data: FeedbackCreationData): Promise<void> {}
}
