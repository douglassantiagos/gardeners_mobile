import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  image: {
    width: '100%',
    height: 400,
  },

  title: {
    color: theme.color.heading,
    textAlign: 'center',
    fontSize: 35,
    lineHeight: 42,
    fontFamily: theme.fonts.title600,
  },

  content: {
    marginTop: -25,
    paddingHorizontal: 40,
    borderRadius: 8,
  },

  subtitle: {
    color: theme.color.heading,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
  },

  button: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonTitle: {
    flex: 1,
    color: theme.color.heading,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 16,
    textAlign: 'center',
  },
});