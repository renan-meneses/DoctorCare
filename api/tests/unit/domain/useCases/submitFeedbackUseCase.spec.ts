import { SubmitFeedbackUseCase } from '@/domain/useCases/submitFeedbackUseCase'
import { InMemoryFeedbacksRepository } from '@tests/unit/mocks/repositories/feedbacksRepository'
import { EmailAdapter } from '@tests/unit/mocks/emailAdapter'
import Chance from 'chance'

const chance = new Chance()

describe('Feedback submitting use case', () => {
  it('Should call correct methods for repository and mail when valid feedback data is provided', async () => {
    // Arrange
    const inMemoryFeedbacksRepository = new InMemoryFeedbacksRepository()
    const emailAdapter = new EmailAdapter()
    const repositorySpy = jest.spyOn(inMemoryFeedbacksRepository, 'create')
    const mailSpy = jest.spyOn(emailAdapter, 'send')
    const payloadMock = {
      type: chance.string(),
      description: chance.string()
    }
    const sut = new SubmitFeedbackUseCase(
      inMemoryFeedbacksRepository,
      emailAdapter
    )

    // Act
    await sut.execute(payloadMock)

    // Assert
    expect(repositorySpy).toHaveBeenCalledTimes(1)
    expect(repositorySpy).toHaveBeenCalledWith(payloadMock)
    expect(mailSpy).toHaveBeenCalledTimes(1)
  })

  it('Should return an error when invalid feedback data is provided', async () => {
    // Arrange
    const inMemoryFeedbacksRepository = new InMemoryFeedbacksRepository()
    const emailAdapter = new EmailAdapter()
    const invalidFeedbackData = [
      {
        description: '',
        type: chance.string()
      },
      {
        description: chance.string(),
        type: ''
      }
    ]
    const sut = new SubmitFeedbackUseCase(
      inMemoryFeedbacksRepository,
      emailAdapter
    )

    // Act & assert
    for (const invalidData of invalidFeedbackData) {
      expect(sut.execute(invalidData)).rejects.toThrow()
    }
  })
})
