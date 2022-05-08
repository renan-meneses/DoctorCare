import { FC } from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import { styles } from './styles'
import {
  feedbackOptions,
  FeedbackType
} from '../../../constants/feedbackOptions'

interface FeedbackOptionsProps {
  onFeedbackTypeClick: (value: FeedbackType) => void
}

export const FeedbackOptions: FC<FeedbackOptionsProps> = ({
  onFeedbackTypeClick: setFeedbackType
}) => (
  <View style={styles.container}>
    {Object.entries(feedbackOptions).map(([key, option], index) => (
      <TouchableOpacity
        key={index}
        style={styles.option}
        onPress={() => setFeedbackType(key as FeedbackType)}
      >
        <Image style={styles.optionImage} source={option.image} />
        <Text style={styles.optionTitle}>{option.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
)
