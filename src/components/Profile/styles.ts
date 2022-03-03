import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  user: {
    flexDirection: 'row',
  },

  greeting: {
    fontFamily: theme.fonts.subtitle400,
    fontSize: 20,
    color: theme.color.primary,
    marginRight: 6,
  },

  userName: {
    fontFamily: theme.fonts.title600,
    fontSize: 20,
    color: theme.color.primary,
    marginTop: -10,
  },
})