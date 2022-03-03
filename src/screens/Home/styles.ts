import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    paddingHorizontal: 40,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },

  content: {
    marginVertical: 25,
  },

  title: {
    fontFamily: theme.fonts.title600,
    fontSize: 16,
    color: theme.color.primary
  },  
})