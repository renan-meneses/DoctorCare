import { FC, useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ChatTeardropDots } from 'phosphor-react-native'
import { theme } from '../../theme'
import { styles } from './styles'
import BottomSheet from '@gorhom/bottom-sheet'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { WidgetCopyright } from './WidgetCopyright'
import { FeedbackOptions } from './FeedbackOptions'
import { Text, View } from 'react-native'
import { Form } from '../Form'
import { FeedbackType, feedbackOptions } from '../../constants/feedbackOptions'

const Widget: FC = () => {
  const [activeFeedbackType, setActiveFeedbackType] =
    useState<FeedbackType | null>(null)
  const bottomSheetRef = useRef<BottomSheet>(null)
  const handleBottomSheetToggling = () => {
    bottomSheetRef.current?.expand()
  }

  return (
    <>
      {!activeFeedbackType ? (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={handleBottomSheetToggling}
          >
            <ChatTeardropDots
              color={theme.colors.text_on_brand_color}
              size="24"
              weight="bold"
            />
          </TouchableOpacity>
          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[1, 280]}
            backgroundStyle={styles.modal}
            handleIndicatorStyle={styles.indicator}
            style={{ padding: 16 }}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Deixe seu feedback</Text>
              <FeedbackOptions onFeedbackTypeClick={setActiveFeedbackType} />
              <WidgetCopyright />
            </View>
          </BottomSheet>
        </>
      ) : (
        <Form option={feedbackOptions[activeFeedbackType]} />
      )}
    </>
  )
}

export default gestureHandlerRootHOC(Widget)
