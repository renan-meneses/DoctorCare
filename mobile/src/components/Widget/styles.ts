import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.brand,
    borderRadius: 24,
    bottom: 16,
    height: 48,
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    width: 48
  },
  container: {
    alignItems: 'center'
  },
  indicator: {
    backgroundColor: theme.colors.text_primary
  },
  modal: {
    backgroundColor: theme.colors.surface_primary
  },
  title: {
    color: theme.colors.text_primary,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    marginBottom: 32
  }
})
