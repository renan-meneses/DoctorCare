import BugImage from '../assets/bug.png'
import IdeaImage from '../assets/idea.png'
import OtherImage from '../assets/thought.png'
import { ImageSourcePropType } from 'react-native'

export interface FeedbackOption {
  image: ImageSourcePropType
  title: string
}

export const feedbackOptions: Record<string, FeedbackOption> = {
  Bug: {
    image: BugImage,
    title: 'Problema'
  },
  Idea: {
    image: IdeaImage,
    title: 'Ideia'
  },
  Other: {
    image: OtherImage,
    title: 'Outro'
  }
}

export type FeedbackType = 'Bug' | 'Idea' | 'Other'
