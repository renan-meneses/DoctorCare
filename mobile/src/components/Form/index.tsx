import { FeedbackOption } from '@/constants/feedbackOptions'
import { FC } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

interface FormProps {
  option: FeedbackOption
}

export const Form: FC<FormProps> = ({ option }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={option.image} />
      <Text>{option.title}</Text>
    </View>
  </View>
)
