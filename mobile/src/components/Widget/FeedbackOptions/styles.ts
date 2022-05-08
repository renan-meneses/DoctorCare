import { theme } from '../../../theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  option: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 8
  },
  optionImage: {
    height: 40,
    width: 40
  },
  optionTitle: {
    color: theme.colors.text_primary,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    marginTop: 16
  }
})
