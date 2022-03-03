import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {  
    backgroundColor: theme.color.heading,
    borderRadius: 8,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
  },

  searchIcon: {
    paddingHorizontal: 5,
  },

  textInput: {
    fontSize: 14,
    width: 280,
  },
})