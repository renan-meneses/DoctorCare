export interface FeedbackCreationData {
  description: string
  screenshot?: string
  type: string
}

export interface FeedbacksRepository {
  /**
   * Add a new feedback to database.
   * @param data The feedback data that will be saved.
   */
  create(data: FeedbackCreationData): Promise<void>
}
