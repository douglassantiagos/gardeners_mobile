import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    color: theme.color.heading,
    textAlign: 'center',
    fontSize: 35,
    lineHeight: 42,
    fontFamily: theme.fonts.title600,
    marginTop: 40,
    marginBottom: -60,
  },

  image: {
    width: '70%',
    height: 280,
    marginBottom: 10,
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

  register: {
    color: theme.color.heading,
    fontFamily: theme.fonts.subtitle400,
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 5,
  }
});