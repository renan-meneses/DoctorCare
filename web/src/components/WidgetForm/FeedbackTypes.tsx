import { FC } from 'react'
import { FeedbackType, WIDGET_SECTIONS } from '../../constants/feedbackTypes'

interface IFeedbackTypes {
  setFeedbackType: (value: FeedbackType | null) => void
}

export const FeedbackTypes: FC<IFeedbackTypes> = ({ setFeedbackType }) => (
  <>
    <header>
      <span className="text-xl leading-6">Deixe seu feedback</span>
    </header>
    <main className="grid grid-cols-3 py-8 gap-2 w-full">
      {Object.entries(WIDGET_SECTIONS).map(([key, value]) => (
        <button
          className="bg-zinc-800 rounded py-5 px-2 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          key={key}
          onClick={() => setFeedbackType(key as FeedbackType)}
        >
          <img src={value.image.source} alt={value.image.alt} />
          <span className="font-medium text-sm">{value.title}</span>
        </button>
      ))}
    </main>
  </>
)
