import { ArrowLeft } from 'phosphor-react'
import { FC, FormEvent, useState } from 'react'
import { FeedbackType, WIDGET_SECTIONS } from '../../constants/feedbackTypes'
import { ScreenshotButton } from './ScreenshotButton'
import SuccessIcon from '../../assets/success.svg'

interface IFeedbackContentProps {
  feedbackType: FeedbackType
  onBack: () => void
}

const TEXTAREA_PLACEHOLDER =
  'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'

export const FeedbackContent: FC<IFeedbackContentProps> = ({
  feedbackType,
  onBack: handleFormBack
}) => {
  const [screenshot, setSreenshot] = useState<string | null>(null)
  const [feedbackDescription, setFeedbackDescription] = useState('')
  const [wasFeedbackSent, setWasFeedbackSent] = useState(false)
  const section = WIDGET_SECTIONS[feedbackType]

  const handleFeedbackSubmitting = (event: FormEvent) => {
    event.preventDefault()

    try {
      console.log({
        screenshot,
        feedbackDescription
      })

      setWasFeedbackSent(true)
    } catch (error) {
      alert('Deu ruim!')
    }
  }

  return (
    <>
      {wasFeedbackSent ? (
        <div className="mt-[56px] mb-10 flex flex-col justify-center items-center">
          <img src={SuccessIcon} />
          <h2 className="mt-2 font-medium text-xl leading-6">
            Agradecemos o feedback!
          </h2>
          <button
            className="mt-6 bg-zinc-800 text-sm font-medium py-2 px-6 rounded-[4px]"
            type="button"
            onClick={handleFormBack}
          >
            Quero enviar outro
          </button>
        </div>
      ) : (
        <>
          <header>
            <button
              type="button"
              className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
              onClick={handleFormBack}
            >
              <ArrowLeft weight="bold" size="16" />
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
              <img
                className="w-6 h-6"
                src={section.image.source}
                alt={section.image.alt}
              />
              {section.title}
            </span>
          </header>
          <form className="my-4 w-full">
            <textarea
              className="min-w-[304px] w-full min-h-[112px] border-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none"
              placeholder={TEXTAREA_PLACEHOLDER}
              onChange={(event) => setFeedbackDescription(event.target.value)}
              required
            />
            <footer className="flex gap-2 mt-2">
              <ScreenshotButton
                screenshot={screenshot}
                onScreenshot={setSreenshot}
              />
              <button
                type="submit"
                className="p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors font-medium disabled:opacity-4 disabled:cursor-not-allowed disabled:hover:bg-none disabled:opacity-50 disabled:hover:bg-brand-500"
                onClick={handleFeedbackSubmitting}
                disabled={!feedbackDescription || !screenshot}
              >
                Enviar feedback
              </button>
            </footer>
          </form>
        </>
      )}
    </>
  )
}
