import 'react-native-gesture-handler'
import Widget from './src/components/Widget'
import { FC } from 'react'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

const App: FC = () => {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium })

  if (!fontsLoaded) return <AppLoading />

  return (
    <View style={{ backgroundColor: '#222', flex: 1 }}>
      <StatusBar backgroundColor="transparent" style="light" translucent />
      <Widget />
    </View>
  )
}

export default App
