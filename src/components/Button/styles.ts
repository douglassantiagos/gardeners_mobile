import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  title: {
    flex: 1,
    color: theme.color.heading,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    textAlign: 'center',
  },
})