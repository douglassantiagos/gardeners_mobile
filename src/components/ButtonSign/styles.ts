import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 56,
    backgroundColor: theme.color.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  iconWrapper: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.color.secondary    
  },

  icon: {
    width: 24,
    height: 24,
  },

  title: {
    flex: 1,
    color: theme.color.heading,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    textAlign: 'center',
  },
})