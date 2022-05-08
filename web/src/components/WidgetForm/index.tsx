import { FC, useState } from 'react'
import { FeedbackTypes } from './FeedbackTypes'
import { FeedbackContent } from './FeedbackContent'
import { CloseButton } from './CloseButton'
import { FeedbackType } from '../../constants/feedbackTypes'

export const WidgetForm: FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const handleFormBack = () => setFeedbackType(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <CloseButton />
      {!feedbackType ? (
        <FeedbackTypes setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContent feedbackType={feedbackType} onBack={handleFormBack} />
      )}
      <footer>
        <span>
          Feito com ♥ pela{' '}
          <a
            className="underline underline-offset-4"
            href="http://rocketseat.com.br"
            target="_blank"
          >
            Rocketseat
          </a>
        </span>
      </footer>
    </div>
  )
}
