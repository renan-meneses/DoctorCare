import BugIcon from '../assets/bug.svg'
import IdeaIcon from '../assets/idea.svg'
import OtherIcon from '../assets/thought.svg'

export const WIDGET_SECTIONS = {
  BUG: {
    image: {
      alt: '',
      source: BugIcon
    },
    title: 'Problema'
  },
  IDEA: {
    image: {
      alt: '',
      source: IdeaIcon
    },
    title: 'Ideia'
  },
  OTHER: {
    image: {
      alt: '',
      source: OtherIcon
    },
    title: 'Outro'
  }
}

export type FeedbackType = keyof typeof WIDGET_SECTIONS
